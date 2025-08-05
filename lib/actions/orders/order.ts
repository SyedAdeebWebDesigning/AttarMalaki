"use server";

import prisma from "@/lib/prisma";
import { stripe } from "@/lib/stripe";
import { currentUser } from "@clerk/nextjs/server";

export default async function ValidateOrder(orderId: string): Promise<boolean> {
	const exists = await prisma.order.findUnique({
		where: { id: orderId },
		select: { id: true }, // only fetches `id`, faster and lighter
	});

	return !!exists;
}

export const getOrders = async () => {
	try {
		const orders = await prisma.order.findMany({
			include: {
				user: {
					select: {
						firstName: true,
						lastName: true,
						email: true,
					},
				},
			},
			orderBy: {
				createdAt: "desc",
			},
		});

		return {
			message: "Orders retrieved successfully.",
			orders,
		};
	} catch (error) {
		console.error("Error fetching orders:", error);
		return [];
	}
};

export const getUserOrders = async () => {
	const clerkUser = await currentUser();
	const clerkUserId = clerkUser?.id;
	if (!clerkUserId) {
		return {
			message: "User not authenticated.",
			orders: [],
		};
	}

	const userId = await prisma.user
		.findUnique({
			where: { clerkId: clerkUserId },
			select: { id: true },
		})
		.then((user) => user?.id);

	if (!userId) {
		return {
			message: "User not found.",
			orders: [],
		};
	}
	try {
		const orders = await prisma.order.findMany({
			where: { userId },
		});

		if (!orders || orders.length === 0) {
			return {
				message: "No orders found for this user.",
				orders: [],
			};
		}

		return {
			message: "Orders retrieved successfully.",
			orders,
		};
	} catch (error) {
		return [];
	}
};

export const getOrderById = async (orderId: string) => {
	try {
		const order = await prisma.order.findUnique({
			where: {
				id: orderId,
			},
			include: {
				items: {
					include: {
						product: true, // ← THIS is what you're missing
					},
				},
			},
		});

		if (!order) {
			return {
				message: "Order not found.",
				order: null,
			};
		}

		return {
			message: "Order retrieved successfully.",
			order,
		};
	} catch (error) {
		return {
			message: "Error retrieving order.",
			order: null,
		};
	}
};

export const getPaymentInfoById = async (paymentId: string) => {
	try {
		const payment = await stripe.paymentMethods.retrieve(paymentId);
		if (!payment) {
			return {
				message: "Payment not found.",
				payment: null,
			};
		}
		return {
			message: "Payment retrieved successfully.",
			payment,
		};
	} catch (error) {
		return {
			message: "Error retrieving payment.",
			payment: null,
		};
	}
};
