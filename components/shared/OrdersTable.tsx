"use client";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";
import { Order } from "@/typings";
import { useRouter } from "next/navigation";

const OrdersTable = ({
	orders,
}: {
	orders: {
		orders: Order[];
		message: string;
	};
}) => {
	const router = useRouter();
	return (
		<Table>
			<TableCaption>A list of your recent orders.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead>S.No</TableHead>
					<TableHead>Order ID</TableHead>
					<TableHead>Payment</TableHead>
					<TableHead>Total</TableHead>
					<TableHead>Date</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{orders.orders.map((order, idx) => (
					<TableRow
						key={order.id}
						className="cursor-pointer hover:bg-gray-100 transition-colors"
						onClick={() => {
							router.push(`/your-orders/${order.id}`);
						}}>
						<TableCell className="font-mono text-xs uppercase">
							{idx + 1}
						</TableCell>
						<TableCell className="font-mono text-xs uppercase">
							#{order.id}
						</TableCell>
						<TableCell>
							{order.cardBrand?.toUpperCase()} **** {order.cardLast4}
						</TableCell>
						<TableCell>{formatCurrency(order.total)}</TableCell>
						<TableCell>
							{new Date(order.createdAt).toLocaleString("en-IN", {
								dateStyle: "medium",
								timeStyle: "short",
							})}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default OrdersTable;
