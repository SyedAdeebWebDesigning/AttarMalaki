"use server";

import prisma from "@/lib/prisma";

export const checkWishlist = async (userId: string, productId: string) => {
	try {
		const item = await prisma.wishlist.findFirst({
			where: {
				userId,
				productId,
			},
		});
		if (item) {
			return { exists: true, message: "Item is in wishlist" };
		} else {
			return { exists: false, message: "Item is not in wishlist" };
		}
	} catch (error) {
		return {
			exists: false,
			message: "Error checking wishlist",
		};
	}
};
