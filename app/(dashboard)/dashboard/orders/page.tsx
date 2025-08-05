import DashboardOrdersTable from "@/components/shared/DashboardOrdersTable";
import Heading from "@/components/shared/Heading";
import { getOrders } from "@/lib/actions/orders/order";
import { Order } from "@/typings";

const page = async () => {
	const orders = (await getOrders()) as {
		message: string;
		orders: Order[];
	};

	if (orders.message !== "Orders retrieved successfully.") {
		return <div>No orders found.</div>;
	}
	return (
		<div>
			<Heading>Orders</Heading>
			<DashboardOrdersTable orders={orders.orders} />
		</div>
	);
};

export default page;
