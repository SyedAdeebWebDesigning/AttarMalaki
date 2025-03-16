"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addAddress(
	userId: string,
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
		const newAddress = await prisma.address.create({
			data: {
				userId,
				...addressData,
			},
		});

		// Mark the user as having completed addresses
		await prisma.user.update({
			where: { id: userId },
			data: { hasCompletedAddresses: true },
		});

		// Revalidate any related paths
		revalidatePath("/profile"); // Adjust this path as needed

		return { success: true, address: newAddress };
	} catch (error) {
		console.error("Error adding address:", error);
		return { success: false, message: "Failed to add address" };
	}
}

