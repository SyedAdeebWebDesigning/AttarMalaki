"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";

export async function addAddress(
	userClerkId: string, // Accept clerkId
	addressData: {
		label: string;
		street: string;
		city: string;
		state: string;
		country: string;
		zipCode: string;
	}
) {
	try {
		// Find user ID based on Clerk ID
		const user = await prisma.user.findUnique({
			where: { clerkId: userClerkId },
			select: { id: true },
		});

		if (!user) {
			return { success: false, message: "User not found" };
		}

		// Add address for the user
		const newAddress = await prisma.address.create({
			data: {
				userId: user.id, // Use the fetched user ID
				...addressData,
			},
		});

		// Mark the user as having completed addresses
		await prisma.user.update({
			where: { id: user.id }, // Use the correct user ID
			data: { hasCompletedAddresses: true },
		});

		// Revalidate paths (optional, adjust as needed)
		revalidatePath("/");

		return { success: true, address: newAddress };
	} catch (error) {
		console.error("Error adding address:", error);
		return { success: false, message: "Failed to add address" };
	}
}

export const getAddress = async (userId: string) => {
	try {
		// Check if userId is a valid ObjectId
		if (!ObjectId.isValid(userId)) {
			return { success: false, message: "Invalid user ID format" };
		}

		const addresses = await prisma.address.findMany({
			where: { userId }, // Convert to ObjectId
			orderBy: { createdAt: "desc" },
		});
		return { success: true, addresses };
	} catch (error) {
		console.error("Error fetching address:", error);
		return { success: false, message: "Failed to fetch address" };
	}
};
