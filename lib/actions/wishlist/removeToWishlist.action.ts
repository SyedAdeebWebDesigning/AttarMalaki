"use server";

import prisma from "@/lib/prisma";

export const removeToWishlist = async (userId: string, productId: string) => {
	try {
		const data = await prisma.wishlist.deleteMany({
			where: {
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
