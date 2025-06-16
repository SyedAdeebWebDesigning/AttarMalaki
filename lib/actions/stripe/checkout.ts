"use server";

import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "../user/getUserByClerkId";

export async function createCheckoutSession() {
	const user = await currentUser();
	if (!user?.id) throw new Error("Not logged in");

	const dbUser = await getUserByClerkId(user.id);
	const userId = dbUser.id;

	const bagItems = await prisma.bag.findMany({
		where: { userId },
		include: { product: true },
	});

	if (!bagItems || bagItems.length === 0) {
		throw new Error("Cart is empty");
	}

	const cartTotal = bagItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const lineItems = bagItems.map((item, idx) => ({
		price_data: {
			currency: "inr",
			unit_amount: item.price * 100,
			product_data: {
				name: `${idx + 1}. ${item.product.name} (${item.size.replace(
					"ML_",
					""
				)}ml)`,
				description: item.product.shortDescription?.slice(0, 100) ?? "",
				metadata: {
					productId: item.productId,
					size: item.size,
				},
			},
		},
		quantity: item.quantity,
	}));

	// Add shipping fee if total is less than ₹999
	if (cartTotal < 1000) {
		lineItems.push({
			price_data: {
				currency: "inr",
				unit_amount: 99 * 100,
				product_data: {
					name: "Shipping Fee",
					description: "Standard Delivery for orders under ₹999",
					metadata: undefined,
				},
			},
			quantity: 1,
		});
	}

	const session = await stripe.checkout.sessions.create({
		payment_method_types: ["card", "paypal"],
		mode: "payment",
		line_items: lineItems,
		customer_email: user.emailAddresses[0]?.emailAddress,
		success_url: `${process.env.STRIPE_SUCCESS_URL}?session_id`,
		cancel_url: process.env.STRIPE_CANCEL_URL!,
		metadata: {
			userId,
			clerkUserId: user.id,
		},
	});

	return { url: session.url };
}

export async function validateStripeSessionWithEmail(
	sessionId: string,
	clerkUserId: string
) {
	if (!sessionId.startsWith("cs_")) {
		throw new Error("Invalid session ID");
	}

	try {
		const session = await stripe.checkout.sessions.retrieve(sessionId);

		if (session.payment_status !== "paid") {
			return {
				success: false,
				message: "Payment not completed",
			};
		}

		if (!session.customer_details?.email) {
			return {
				success: false,
				message: "No email associated with this session",
			};
		}

		if (clerkUserId !== session.metadata.clerkUserId) {
			return {
				success: false,
				message: "user ID does not match session metadata",
			};
		}

		if (session) {
			return {
				success: true,
				message: "Session validated successfully",
			};
		}
	} catch (error) {}
}
