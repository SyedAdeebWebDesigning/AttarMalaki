import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

// Cache this function and revalidate every 1 hour
export const revalidate = 3600;
export const fetchCache = "force-cache";
export const dynamic = "force-static";

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
