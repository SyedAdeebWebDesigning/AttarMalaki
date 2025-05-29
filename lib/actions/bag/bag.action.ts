"use server";

import prisma from "@/lib/prisma";

export const addToBag = async ({
	userId,
	productId,
	productPrice,
	productSize,
	quantity = 1,
}: {
	userId: string;
	productId: string;
	productPrice: number;
	productSize: string;
	quantity?: number;
}) => {
	try {
		const existing = await prisma.bag.findUnique({
			where: {
				userId_productId_size: {
					userId,
					productId,
					size: productSize,
				},
			},
		});

		if (existing) {
			return await prisma.bag.update({
				where: {
					userId_productId_size: {
						userId,
						productId,
						size: productSize,
					},
				},
				data: {
					quantity: existing.quantity + quantity,
					price: productPrice,
				},
			});
		}

		return await prisma.bag.create({
			data: {
				userId,
				productId,
				quantity,
				size: productSize,
				price: productPrice,
			},
		});
	} catch (error: any) {
		console.error("addToBag error:", error);
		throw new Error("Failed to add item to bag");
	}
};

export const getBagLength = async (userId: string) => {
	try {
		const bag = await prisma.bag.findMany({
			where: { userId },
		});
		return bag.length;
	} catch (error: any) {
		return null;
	}
};
