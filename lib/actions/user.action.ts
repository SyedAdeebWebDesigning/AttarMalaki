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
			},
		});
	} catch (error) {
		console.error("Error creating user:", error);
		throw new Error("Failed to create user. Please try again.");
	}
};

export const getUserByClerkId = async (clerkId: string) => {
	try {
		// Fetching the user from the database
		return await prisma.user.findUnique({
			where: {
				clerkId: clerkId,
			},
		});
	} catch (error) {
		console.error("Error fetching user:", error);
		throw new Error("Failed to fetch user. Please try again.");
	}
};

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
