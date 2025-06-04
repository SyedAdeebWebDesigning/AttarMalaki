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
		// 🧠 Get current stock for the size
		const stockEntry = await prisma.productQuantity.findFirst({
			where: {
				productId,
				size: productSize,
			},
		});

		if (!stockEntry) {
			throw new Error("This size is not available for the product.");
		}

		if (stockEntry.stock < quantity) {
			throw new Error(`Only ${stockEntry.stock} item(s) left in stock.`);
		}

		// 🔍 Check if item already exists in bag
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
			// If adding exceeds stock, throw error
			if (quantity > stockEntry.stock) {
				throw new Error(`Only ${stockEntry.stock} item(s) left in stock.`);
			}

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

		// 🔻 Reduce stock
		await prisma.productQuantity.updateMany({
			where: {
				productId,
				size: productSize,
			},
			data: {
				stock: { decrement: quantity },
			},
		});

		// Return updated stock
		const updated = await prisma.productQuantity.findFirst({
			where: {
				productId,
				size: productSize,
			},
		});

		return updated;
	} catch (error: any) {
		console.error("addToBag error:", error);
		throw new Error(error.message || "Failed to add item to bag");
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

export const deleteBagItem = async (id: string, userId: string) => {
	try {
		// First, find the item to validate ownership and get product info
		const bagItem = await prisma.bag.findFirst({
			where: {
				id,
				userId,
			},
		});

		if (!bagItem) {
			throw new Error("Item not found or already deleted");
		}

		// Then delete it
		await prisma.bag.delete({
			where: {
				id: bagItem.id,
			},
		});

		// Increase the stock for the specific product and size
		await prisma.productQuantity.updateMany({
			where: {
				productId: bagItem.productId,
				size: bagItem.size as Size,
			},
			data: {
				stock: { increment: bagItem.quantity },
			},
		});

		return bagItem;
	} catch (error: any) {
		console.error("deleteBagItem error:", error.message);
		throw new Error("Failed to delete bag item");
	}
};

export const clearBag = async (userId: string) => {
	try {
		await prisma.bag.deleteMany({
			where: { userId },
		});
		const deletedCount = await prisma.bag.count({
			where: { userId },
		});

		return { success: true, message: "Bag cleared successfully" };
	} catch (error: any) {
		console.error("clearBag error:", error);
		return { success: false, message: "Failed to clear bag" };
	}
};
