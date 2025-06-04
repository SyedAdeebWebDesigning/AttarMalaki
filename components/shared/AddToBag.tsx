"use client";

import { Button } from "@/components/ui/button";
import { addToBag } from "@/lib/actions/bag/bag.action";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type Props = {
	userId: string;
	productId: string;
	productPrice: number;
	productSize: any;
	productQty: number;
	totalQty: number;
	onStockUpdate: (newStock: number) => void; // 🆕
};

const AddToBag = ({
	userId,
	productId,
	productPrice,
	totalQty,
	productSize,
	productQty,
	onStockUpdate,
}: Props) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const handleClick = async () => {
		setIsLoading(true);
		const updated = await addToBag({
			userId,
			productId,
			productPrice,
			productSize,
			quantity: productQty,
		});

		if (updated?.stock !== undefined) {
			onStockUpdate(updated.stock); // 🔥 update parent
		}

		toast.success("Added to bag successfully!", {
			onClose: () => {
				router.refresh();
			},
		});
		setIsLoading(false);
	};

	return (
		<Button
			onClick={handleClick}
			disabled={isLoading || productQty > totalQty || totalQty === 0}>
			{isLoading ? "Adding..." : "Add to Bag"}
			{productQty <= 0 && (
				<span className="text-red-500 ml-2">Out of Stock</span>
			)}
		</Button>
	);
};

export default AddToBag;
