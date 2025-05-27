// No "use server" needed here
import prisma from "@/lib/prisma";
import { user } from "@prisma/client";

export const revalidate = 3600;
export const fetchCache = "force-cache";
export const dynamic = "force-static";

export const getUserByClerkId = async (
	clerkId: string
): Promise<user | null> => {
	try {
		return await prisma.user.findUnique({
			where: {
				clerkId,
			},
		});
	} catch (error) {
		console.error("Error fetching user:", error);
		throw new Error("Failed to fetch user. Please try again.");
	}
};
