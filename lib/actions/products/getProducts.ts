// lib/actions/products/products.action.ts

import prisma from "@/lib/prisma";
import { cache } from "react";

export const getProducts = cache(
	async (page: number = 1, category?: string) => {
		const perPage = 9;
		const skip = (page - 1) * perPage;

		return prisma.product.findMany({
			skip: category ? undefined : skip,
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
	}
);

export const getTotalProductsCount = cache(async () => {
	return prisma.product.count();
});
