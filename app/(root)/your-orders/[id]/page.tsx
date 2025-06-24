import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import PaymentCard from "@/components/shared/PaymentCard";
import { getAddressById } from "@/lib/actions/address.action";
import { getOrderById, getPaymentInfoById } from "@/lib/actions/orders/order";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { formatCurrency, formatSize } from "@/lib/utils";
import { Address, Order, user } from "@/typings";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";

const page = async ({ params }) => {
	const orderId = params.id;

	const orderData = (await getOrderById(orderId)) as {
		message: string;
		order: Order;
	};

	const order = orderData.order as Order;
	const addressId = order.addressId;
	const address = (await getAddressById(addressId)).address as Address;
	const paymentInfo = (await getPaymentInfoById(order.paymentMethodId)) as any;

	const number = `**** **** **** ${paymentInfo.payment.card.last4}`;
	const name = paymentInfo.payment.billing_details?.name || "Unknown";
	const expire = `${paymentInfo.payment.card.exp_month
		.toString()
		.padStart(2, "0")}/${paymentInfo.payment.card.exp_year
		.toString()
		.slice(-2)}`;
	const type = paymentInfo.payment.card.brand;

	const _ = await currentUser();
	const user = (await getUserByClerkId(_.id)) as user;
	return (
		<section className="pt-24 pb-8 bg-neutral-50">
			<MaxWidthWrapper>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto ">
					{/* 🛒 Order Items */}
					<div className="p-4    flex flex-col h-full">
						<h2 className="text-lg font-semibold mb-2">Order Items</h2>
						<div className="border-b bg-gray-500 w-full mb-2" />
						<ul className="space-y-4 pr-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-transparent">
							{order.items.map((item, idx) => (
								<li key={idx} className="flex gap-4 items-center">
									<Image
										width={64}
										height={64}
										src={item.product.image}
										alt={item.product.name}
										className="w-16 h-16 rounded object-cover "
									/>
									<div className="flex flex-col">
										<span className="font-medium text-sm">
											{item.product.name}
										</span>
										<span className="text-xs text-gray-500">
											Size: {formatSize(item.size)} x {item.quantity}
										</span>
									</div>
									<div className="ml-auto font-semibold text-sm">
										{formatCurrency(item.price * item.quantity)}
									</div>
								</li>
							))}
						</ul>
					</div>

					{/* 📦 Order Summary */}
					<div className="p-4    flex flex-col justify-between h-full">
						<h2 className="text-lg font-semibold mb-2">Order Summary</h2>
						<div className="border-b bg-gray-500 w-full mb-2" />

						<div className="text-sm text-gray-700 space-y-1">
							<p>
								Order ID: <span className="font-mono">{order.id}</span>
							</p>
							<p>Status: {order.deliveredStatus}</p>
							<p className="flex justify-start">
								<span>Total:</span>
								<span className="">{formatCurrency(order.total)}</span>
							</p>
							<p>
								Placed On:{" "}
								{new Date(order.createdAt).toLocaleString("en-IN", {
									dateStyle: "medium",
									timeStyle: "short",
								})}
							</p>
						</div>
					</div>

					{/* 🏠 Shipping Address */}
					<div className="p-4 rounded-xl  flex flex-col justify-start h-full">
						<h2 className="text-lg font-semibold mb-2">Shipping Address</h2>
						<div className="border-t bg-gray-500" />
						<p className="text-sm text-gray-700 leading-relaxed">
							{address.label} Address
							<br />
							Street: {address.street}
							<br />
							City: {address.city}
							<br />
							State: {address.state}
							<br />
							Country / Zipcode: {address.country} / {address.zipCode}
						</p>
						<h2 className="text-lg font-semibold mt-4">User Details</h2>
						<div className="border-t bg-gray-500" />
						<p className="text-sm text-gray-700 leading-relaxed">
							Name: {user.firstName} {user.lastName}
							<br />
							Email: {user.email || "Not provided"}
						</p>
					</div>

					{/* 💳 Payment Info */}
					<div className="p-4 flex flex-col justify-start items-start gap-4 h-full w-full">
						<h2 className="text-lg font-semibold ">Payment Information</h2>
						<div className="border-b bg-gray-500 w-full" />
						<div className="p-4 rounded-[32px]  flex flex-col justify-start items-start gap-4 h-full w-full">
							<PaymentCard
								number={number}
								expire={expire}
								name={name}
								type={type}
							/>
						</div>
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default page;
