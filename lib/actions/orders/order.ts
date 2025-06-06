"use server";

import prisma from "@/lib/prisma";

export default async function ValidateOrder(orderId: string): Promise<boolean> {
	const exists = await prisma.order.findUnique({
		where: { id: orderId },
		select: { id: true }, // only fetches `id`, faster and lighter
	});

	return !!exists;
}
