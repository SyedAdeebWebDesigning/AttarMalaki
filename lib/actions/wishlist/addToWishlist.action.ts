"use server";

import prisma from "@/lib/prisma";

export const addToWishlist = async (userId: string, productId: string) => {
	try {
		const data = await prisma.wishlist.create({
			data: {
				userId,
				productId,
			},
		});

		return {
			success: true,
			data,
		};
	} catch (error) {
		return {
			success: false,
			error: error.message,
		};
	}
};
