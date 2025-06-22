import Heading from "@/components/shared/Heading";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import OrdersTable from "@/components/shared/OrdersTable";
import { getUserOrders } from "@/lib/actions/orders/order";
import { Order } from "@/typings";

interface Orders {
	orders: Order[];
	message: string;
}

const page = async () => {
	const orders = (await getUserOrders()) as Orders;

	if (orders.message !== "Orders retrieved successfully.") {
		return (
			<div className="p-24">
				<Heading>{orders.message}</Heading>
			</div>
		);
	}

	return (
		<MaxWidthWrapper>
			<div className="py-24 px-0">
				<Heading className="m-0">Your Orders</Heading>
				<OrdersTable orders={orders} />
			</div>
		</MaxWidthWrapper>
	);
};

export default page;
