"use server";

import prisma from "@/lib/prisma";
import { Prisma, Product, Size } from "@prisma/client";

/**
 * Fetches all products from the database.
 * @returns {Promise<Product[]>} An array of product objects.
 */
export const getProducts = async (
	page: number = 1,
	category?: string
): Promise<Product[]> => {
	try {
		const perPage = 6;
		const skip = (page - 1) * perPage;

		const products = await prisma.product.findMany({
			skip: category ? undefined : skip, // Only paginate if no category
			take: category ? undefined : perPage,
			where: category
				? {
						category: {
							contains: category,
							mode: "insensitive",
						},
				  }
				: {},
			include: {
				quantities: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return products || [];
	} catch (error) {
		console.error("Error fetching products:", error);
		return [];
	}
};

export const getAllProducts = async (): Promise<Product[]> => {
	try {
		const products = await prisma.product.findMany({
			include: {
				quantities: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		if (!products) {
			return [];
		}
		return products;
	} catch (error) {
		return [];
	}
};

export const getProductById = async (id: string): Promise<Product | null> => {
	try {
		const product = await prisma.product.findUnique({
			where: { id },
			include: {
				quantities: true, // 👈 include stock info
			},
		});
		if (!product) return null;
		return product;
	} catch (error) {
		console.error("Error fetching product by ID:", error);
		return null;
	}
};

/**
 * Creates a new product with quantity options.
 * @param {Prisma.ProductCreateInput & { quantities: { size: Size; price: number; stock: number; discountPrice?: number }[] }} data - The product data including quantity options.
 * @returns {Promise<Product>} The newly created product.
 */
export const createProduct = async (
	data: Prisma.ProductCreateInput & {
		quantities: {
			size: Size;
			price: number;
			stock: number;
			discountPrice?: number;
		}[];
	}
): Promise<Product> => {
	try {
		const { quantities, ...productData } = data;

		const product = await prisma.product.create({
			data: {
				...productData,
				quantities: {
					create: quantities,
				},
			},
			include: {
				quantities: true,
			},
		});

		return product;
	} catch (error) {
		console.error("Error creating product:", error);
		throw error;
	}
};

export const updateProduct = async (
	id: string,
	data: Prisma.ProductUpdateInput & {
		quantities?: {
			size: Size;
			price: number;
			stock: number;
			discountPrice?: number;
		}[];
	}
): Promise<Product> => {
	try {
		const { quantities, ...productData } = data;

		// Update the main product
		const updatedProduct = await prisma.product.update({
			where: { id },
			data: {
				...productData,
				quantities: quantities
					? {
							deleteMany: {}, // 🧹 Delete existing quantities
							create: quantities, // 🔁 Add new ones
					  }
					: undefined,
			},
			include: {
				quantities: true,
			},
		});

		return updatedProduct;
	} catch (error) {
		console.error("Error updating product:", error);
		throw error;
	}
};

/**
 * Deletes a product by its ID.
 * @param {string} id - The ID of the product to delete.
 * @returns {Promise<Product>} The deleted product object.
 */
export const deleteProduct = async (id: string): Promise<Product> => {
	try {
		const product = await prisma.product.delete({
			where: { id },
		});
		return product;
	} catch (error) {
		console.error("Error deleting product:", error);
	}
};

/**
 * Fetches products by category name.
 * @param {string} category - The category to filter products by.
 * @returns {Promise<Product[]>} An array of matching products.
 */
export const getProductsByCategory = async (
	category: string
): Promise<Product[]> => {
	try {
		const products = await prisma.product.findMany({
			where: { category: category },
		});
		if (!products) {
			return [];
		}
		return products;
	} catch (error) {
		console.error("Error fetching products by category:", error);
	}
};

export const getTotalProductsCount = async (): Promise<number> => {
	try {
		const count = await prisma.product.count();
		return count;
	} catch (error) {
		console.error("Error fetching total products count:", error);
		return 0;
	}
};

export const getRelativeProducts = async (
	category: string,
	id: string
): Promise<Product[]> => {
	try {
		const keywords = category
			.split(" ")
			.map((word) => word.trim())
			.filter((word) => word.length > 0);

		const products = await prisma.product.findMany({
			where: {
				AND: [
					{
						id: {
							not: id, // Exclude the current product
						},
					},
					{
						OR: keywords.map((keyword) => ({
							category: {
								contains: keyword,
								mode: "insensitive", // So "oud" matches "Oud"
							},
						})),
					},
				],
			},
			include: {
				quantities: true, // Include stock info
			},
			take: 4,
			orderBy: {
				createdAt: "desc",
			},
		});

		return products;
	} catch (error) {
		console.error("Error fetching related products:", error);
		return [];
	}
};

export const getProductReviews = async (productId: string) => {
	try {
		const reviews = await prisma.review.findMany({
			where: { productId },
			orderBy: { createdAt: "desc" },
			select: {
				user: {
					select: {
						id: true,
						firstName: true,
						lastName: true,
						email: true,
						imgUrl: true,
					},
				},
				rating: true,
				comment: true,
				createdAt: true,
			},
		});

		if (!reviews) {
			return [];
		}

		return reviews;
	} catch (error) {
		console.error("Error fetching product reviews:", error);
		return [];
	}
};

export const addProductReview = async (
	userId: string,
	productId: string,
	comment: string,
	rating: number
) => {
	try {
		const review = await prisma.review.create({
			data: {
				userId,
				productId,
				comment,
				rating,
			},
		});
		return {
			success: true,
			review,
		};
	} catch (error) {
		return {
			success: false,
			error: "Failed to add review",
		};
	}
};
