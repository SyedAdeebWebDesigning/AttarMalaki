import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

type Props = {};

function AddToBag({}: Props) {
	return (
		<Button>
			<ShoppingCart className="h-4 w-4" />
			<p className="text-sm font-semibold">Add to Bag</p>
		</Button>
	);
}

export default AddToBag;
