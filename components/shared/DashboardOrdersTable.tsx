"use client";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "../ui/table";
import { Order } from "@/typings";

const DashboardOrdersTable = ({ orders }: { orders: Order[] }) => {
	return (
		<div className="w-full overflow-x-auto">
			<Table className="min-w-[600px]">
				<TableCaption>A list of your users.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>#</TableHead>
						<TableHead>Order ID</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Card</TableHead>
						<TableHead>Email</TableHead>
						<TableHead className="text-right">Order Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{orders.map((order, index) => (
						<TableRow key={order.id}>
							<TableCell className="font-medium">{index + 1}</TableCell>
							<TableCell className="uppercase font-semibold">
								{order.id.replace(/(.{4})/g, "$1 ").trim()}
							</TableCell>
							<TableCell className="flex items-center gap-2">
								{order.user.firstName} {order.user.lastName}
							</TableCell>
							<TableCell className="uppercase">{order.cardBrand}</TableCell>
							<TableCell className="">{order.user.email}</TableCell>
							<TableCell className="text-right">
								<span
									className={`px-2 mr-4 py-1 rounded-full text-xs font-semibold ${
										order.deliveredStatus === "delivered"
											? "bg-green-100 text-green-800"
											: "bg-yellow-100 text-yellow-800"
									}`}>
									{order.deliveredStatus}
								</span>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};

export default DashboardOrdersTable;
