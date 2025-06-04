"use client";

import { useEffect, useState } from "react";
import { pusherClient } from "@/lib/pusher-client";

interface Props {
	productId: string;
	initialStock: number;
	size: string;
}

const ProductStock = ({ productId, initialStock, size }: Props) => {
	const [stock, setStock] = useState<number>(initialStock);

	useEffect(() => {
		const channel = pusherClient.subscribe("stock-channel");

		channel.bind("stock-updated", (data: any) => {
			if (data.productId === productId && data.size === size) {
				setStock(data.stock);
			}
		});

		return () => {
			channel.unbind_all();
			pusherClient.unsubscribe("stock-channel");
		};
	}, [productId, size]);

	return (
		<div className="text-sm font-medium">
			Stock Left:{" "}
			<span className={stock === 0 ? "text-red-500" : "text-green-600"}>
				{stock}
			</span>
		</div>
	);
};

export default ProductStock;
