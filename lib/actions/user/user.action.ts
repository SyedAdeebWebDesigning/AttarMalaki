"use server";
import prisma from "@/lib/prisma";

export type User = {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	isAdmin: boolean;
	imgUrl: string;
	createdAt: Date;
	hasCompletedAddresses: boolean;
	updatedAt: Date;
	addresses: {
		street: string;
		city: string;
		state: string;
		country: string;
	}[];
};

export interface CreateUserProps {
	firstName: string;
	clerkId: string;
	lastName: string;
	email: string;
	isAdmin: boolean;
	imgUrl: string;
}

/**
 * Creates a new user in the database.
 * @param {CreateUserProps} UserData - The user information to create.
 * @returns {Promise<User>} The newly created user.
 */
export const createUser = async (UserData: CreateUserProps) => {
	try {
		// Creating a new user in the database
		return await prisma.user.create({
			data: {
				clerkId: UserData.clerkId,
				firstName: UserData.firstName,
				lastName: UserData.lastName,
				email: UserData.email,
				isAdmin: UserData.isAdmin,
				imgUrl: UserData.imgUrl,
				hasCompletedAddresses: false, // Default value

			},
		});
	} catch (error) {
		console.error("Error creating user:", error);
		throw new Error("Failed to create user. Please try again.");
	}
};

/**
 * Deletes a user by their Clerk ID.
 * @param {string} clerkId - The Clerk ID of the user to delete.
 * @returns {Promise<User>} The deleted user object.
 */
export const deleteUserByClerkId = async (clerkId: string) => {
	try {
		// Deleting the user from the database
		return await prisma.user.delete({
			where: {
				clerkId: clerkId,
			},
		});
	} catch (error) {
		console.error("Error deleting user:", error);
		throw new Error("Failed to delete user. Please try again.");
	}
};

/**
 * Retrieves all users from the database.
 * @returns {Promise<User[]>} An array of user objects.
 */
export const getUsers = async () => {
	try {
		// Fetching all users from the database
		return await prisma.user.findMany({
			orderBy: {
				createdAt: "desc",
			},
		});
	} catch (error) {
		console.error("Error fetching users:", error);
		throw new Error("Failed to fetch users. Please try again.");
	}
};

/**
 * Retrieves all users with their addresses included.
 * @returns {Promise<User[]>} An array of user objects with address data.
 */
export const getUsersWithAddress = async () => {
	try {
		// Fetching all users with their addresses from the database
		return await prisma.user.findMany({
			include: {
				addresses: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
	} catch (error) {
		console.error("Error fetching users with address:", error);
		throw new Error("Failed to fetch users with address. Please try again.");
	}
};

/**
 * Toggles a user's admin status.
 * @param {string} userId - The ID of the user to update.
 * @param {boolean} isAdmin - The current admin status to toggle.
 * @returns {Promise<User>} The updated user object.
 */
export const toggleAdmin = async (userId: string, isAdmin: boolean) => {
	try {
		// Updating the user's admin status in the database
		return await prisma.user.update({
			where: {
				id: userId,
			},
			data: {
				isAdmin: !isAdmin,
			},
		});
	} catch (error) {
		console.error("Error toggling admin status:", error);
		throw new Error("Failed to toggle admin status. Please try again.");
	}
};
