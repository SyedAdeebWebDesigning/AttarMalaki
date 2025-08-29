import prisma from "@/lib/prisma";
import { user } from "@prisma/client";
import { cache } from "react";

export const getUserByClerkId = cache(
	async (clerkId: string): Promise<user | null> => {
		try {
			return await prisma.user.findUnique({
				where: { clerkId },
			});
		} catch (error) {
			console.error("Error fetching user:", error);
			throw new Error("Failed to fetch user. Please try again.");
		}
	}
);
