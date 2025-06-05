// app/api/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";
import { getSelectedAddressId } from "@/lib/actions/address.action";

export async function POST(req: NextRequest) {
	const sig = req.headers.get("stripe-signature")!;
	const body = await req.text();

	let event;

	try {
		event = stripe.webhooks.constructEvent(
			body,
			sig,
			process.env.STRIPE_WEBHOOK_SECRET!
		);
	} catch (err) {
		console.error("Webhook Error:", err);
		return new NextResponse("Webhook Error", { status: 400 });
	}

	if (event.type === "checkout.session.completed") {
		const session = event.data.object;
		const userId = session.metadata.userId;

		const bagItems = await prisma.bag.findMany({
			where: { userId },
			include: { product: true },
		});

		const result = await getSelectedAddressId(userId);

		if (!result.success || !result.selectedAddressId) {
			console.error("No selected address found for user:", userId);
			return new NextResponse("No address found", { status: 400 });
		}

		const addressId = result.selectedAddressId;

		// 🧾 Create Order
		await prisma.order.create({
			data: {
				userId,
				total: session.amount_total! / 100,
				addressId: addressId,
				items: {
					create: bagItems.map((item) => ({
						productId: item.productId,
						quantity: item.quantity,
						size: item.size,
						price: item.price,
					})),
				},
			},
		});

		// 🧹 Clear the bag
		await prisma.bag.deleteMany({ where: { userId } });
	}

	return new NextResponse("OK", { status: 200 });
}
