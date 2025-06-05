// app/api/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import prisma from "@/lib/prisma";

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

		// 🧾 Create Order
		await prisma.order.create({
			data: {
				userId,
				total: session.amount_total! / 100,
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
