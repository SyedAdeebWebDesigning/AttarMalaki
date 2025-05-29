"use client";

import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

import { addToBag } from "@/lib/actions/bag/bag.action";
import { toast } from "react-toastify";
import { useState } from "react";

type Props = {
	productId: string;
	productPrice: number;
	productSize: string;
	productQty: number;
	userId: string;
};

function AddToBag({
	productId,
	productPrice,
	productSize,
	productQty,
	userId,
}: Props) {
	const [isLoading, setIsLoading] = useState(false);
	const handleAddToBag = async () => {
		if (!userId) {
			toast.error("Please sign in to add items to your bag.");
			return;
		}
		if (!productId || !productPrice || !productSize || !productQty) {
			toast.error("Invalid product details. Please try again.");
			return;
		}
		setIsLoading(true);
		await addToBag({
			userId,
			productId,
			productPrice,
			productSize,
			quantity: productQty,
		});
	};

	return (
		<Button onClick={handleAddToBag} disabled={isLoading}>
			<ShoppingCart className="h-4 w-4 mr-2" />
			<span className="text-sm font-semibold">
				{isLoading ? "Adding..." : "Add to Bag"}
			</span>
		</Button>
	);
}

export default AddToBag;
