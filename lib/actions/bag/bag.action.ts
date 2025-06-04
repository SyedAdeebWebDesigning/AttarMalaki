"use server";

import prisma from "@/lib/prisma";
import { Size } from "@prisma/client";

// AddToBag.tsx (or your action file)
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
	productSize: Size;
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
			await prisma.bag.update({
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
		} else {
			await prisma.bag.create({
				data: {
					userId,
					productId,
					quantity,
					size: productSize,
					price: productPrice,
				},
			});
		}

		// 🧠 Reduce stock now
		const updatedQty = await prisma.productQuantity.updateMany({
			where: {
				productId,
				size: productSize,
			},
			data: {
				stock: { decrement: quantity },
			},
		});

		// 🧾 Return updated stock
		const updated = await prisma.productQuantity.findFirst({
			where: {
				productId,
				size: productSize,
			},
		});

		return updated;
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

export const getUserBag = async (userId: string) => {
	try {
		const bag = await prisma.bag.findMany({
			where: { userId },
		});
		if (bag.length === 0) {
			return null; // Return null if the bag is empty
		}
		return bag;
	} catch (error: any) {
		console.error("getUserBag error:", error);
		return null;
	}
};
