import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

// Cache this function and revalidate every 1 hour
export const revalidate = 3600;
export const fetchCache = "force-cache";
export const dynamic = "force-static";

export const getBestSellers = async (): Promise<Product[]> => {
	try {
		const products = await prisma.product.findMany({
			where: {
				isBestSeller: true,
			},
			orderBy: {
				createdAt: "desc",
			},
			take: 6, // Limit to 6 best sellers
			include: {
				quantities: true,
			},
		});
		return products || [];
	} catch (error) {
		console.error("Error fetching best sellers:", error);
		return [];
	}
};
