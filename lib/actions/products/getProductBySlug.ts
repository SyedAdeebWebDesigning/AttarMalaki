import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

export const getProductBySlug = async (
	slug: string
): Promise<Product | null> => {
	try {
		const product = await prisma.product.findUnique({
			where: { slug },
			include: {
				quantities: true,
			},
		});
		return product || null;
	} catch (error) {
		console.error("Error fetching product by slug:", error);
		return null;
	}
};
