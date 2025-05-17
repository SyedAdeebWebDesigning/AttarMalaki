"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ObjectId } from "mongodb";

/**
 * Adds a new address for a user identified by Clerk ID.
 * @param {string} userClerkId - The Clerk ID of the user.
 * @param {object} addressData - The address details.
 * @returns {Promise<object>} The result object with success flag and address or error message.
 */
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

/**
 * Retrieves all addresses for a user by user ID.
 * @param {string} userId - The user's database ID.
 * @returns {Promise<object>} The result containing success status and addresses or error message.
 */
export const getAddress = async (userId: string) => {
	try {
		// Check if userId is a valid ObjectId
		if (!ObjectId.isValid(userId)) {
			return { success: false, message: "Invalid user ID format" };
		}

		const addresses = await prisma.address.findMany({
			where: { userId }, // Convert to ObjectId
			orderBy: { createdAt: "asc" },
		});
		return { success: true, addresses };
	} catch (error) {
		console.error("Error fetching address:", error);
		return { success: false, message: "Failed to fetch address" };
	}
};

/**
 * Retrieves a single address by its ID.
 * @param {string} id - The ID of the address.
 * @returns {Promise<object>} The result containing the address or error message.
 */
export const getAddressById = async (id: string) => {
	try {
		const address = await prisma.address.findFirst({
			where: {
				id,
			},
		});
		return { success: true, address };
	} catch (error) {
		console.error("Error fetching address:", error);
		return { success: false, message: "Failed to fetch address" };
	}
};

/**
 * Updates an existing address.
 * @param {string} id - The ID of the address to update.
 * @param {object} addressData - The updated address fields.
 * @returns {Promise<object>} The result with success status and updated address or error message.
 */
export const updateAddress = async (id: string, addressData: any) => {
	try {
		const updatedAddress = await prisma.address.update({
			where: { id },
			data: addressData,
		});
		return { success: true, updatedAddress };
	} catch (error) {
		console.error("Error updating address:", error);
		return { success: false, message: "Failed to update address" };
	}
};

/**
 * Deletes an address by its ID and user ID, preventing deletion of the last address.
 * @param {string} id - The ID of the address to delete.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<object>} The result with success status or error message.
 */
export const deleteAddress = async (id: string, userId: string) => {
	try {
		// Count total addresses of the user
		const totalAddresses = await prisma.address.count({
			where: { userId },
		});

		// Prevent deletion if it's the last address
		if (totalAddresses <= 1) {
			return { success: false, message: "Cannot delete the last address" };
		}

		// Delete the address
		const deletedAddress = await prisma.address.delete({
			where: { id },
		});

		// Return success response
		return {
			success: true,
			message: "Address deleted successfully",
			deletedAddress,
		};
	} catch (error) {
		console.error("Error deleting address:", error);
		return { success: false, message: "Failed to delete address" };
	}
};
