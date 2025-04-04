import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import {
	createUser,
	CreateUserProps,
	deleteUserByClerkId,
	getUserByClerkId,
} from "@/lib/actions/user.action";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
export async function POST(req: Request) {
	const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET;

	if (!SIGNING_SECRET) {
		throw new Error(
			"Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env"
		);
	}

	// Create new Svix instance with secret
	const wh = new Webhook(SIGNING_SECRET);

	// Get headers
	const headerPayload = await headers();
	const svix_id = headerPayload.get("svix-id");
	const svix_timestamp = headerPayload.get("svix-timestamp");
	const svix_signature = headerPayload.get("svix-signature");

	// If there are no headers, error out
	if (!svix_id || !svix_timestamp || !svix_signature) {
		return new Response("Error: Missing Svix headers", {
			status: 400,
		});
	}

	// Get body
	const payload = await req.json();
	const body = JSON.stringify(payload);

	let evt: WebhookEvent;

	// Verify payload with headers
	try {
		evt = wh.verify(body, {
			"svix-id": svix_id,
			"svix-timestamp": svix_timestamp,
			"svix-signature": svix_signature,
		}) as WebhookEvent;
	} catch (err) {
		console.error("Error: Could not verify webhook:", err);
		return new Response("Error: Verification error", {
			status: 400,
		});
	}

	if (evt.type === "user.created") {
		const { id, email_addresses, image_url, first_name, last_name } = evt.data;

		const user: CreateUserProps = {
			clerkId: id,
			email: email_addresses[0]?.email_address,
			firstName: first_name ?? "",
			lastName: last_name ?? "",
			imgUrl: image_url,
			isAdmin: false,
		};

		try {
			const newUser = await createUser(user);

			// Update Clerk user metadata with newly created user ID
			if (newUser) {
				// @ts-ignore
				await clerkClient.users.updateMetadata(id, {
					publicMetadata: {
						userId: newUser.id, // Use the returned `id` from `createUser`
					},
				});
			}

			return NextResponse.json({ message: "OK", user: newUser });
		} catch (error: any) {
			return NextResponse.json(
				{ message: "Error creating user", error: error.message },
				{ status: 500 }
			);
		}
	}

	if (evt.type === "user.updated") {
		const { id, email_addresses, image_url, first_name, last_name } = evt.data;

		try {
			const user = await getUserByClerkId(id!);

			if (!user) {
				return NextResponse.json(
					{ message: "User not found" },
					{ status: 404 }
				);
			}

			const updatedUser = await prisma.user.update({
				where: { clerkId: id! },
				data: {
					email: email_addresses[0]?.email_address,
					firstName: first_name ?? "",
					lastName: last_name ?? "",
					imgUrl: image_url,
				},
			});

			return NextResponse.json({ message: "OK", user: updatedUser });
		} catch (error: any) {
			return NextResponse.json(
				{ message: "Error updating user", error: error.message },
				{ status: 500 }
			);
		}
	}

	if (evt.type === "user.deleted") {
		const { id } = evt.data;

		try {
			await deleteUserByClerkId(id!);
		} catch (error: any) {
			return NextResponse.json(
				{ message: "Error deleting user", error: error.message },
				{ status: 500 }
			);
		}
	}

	return new Response("", { status: 200 });
}
