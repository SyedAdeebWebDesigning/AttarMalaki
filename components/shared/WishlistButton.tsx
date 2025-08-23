"use client";

import { Heart } from "lucide-react";
import { Button } from "../ui/button";

const WishlistButton = () => {
	return (
		<Button
			variant="outline"
			className="flex gap-2 border-gray-300 text-red-500 hover:bg-red-50">
			<Heart className="size-4 transition-transform hover:scale-105 active:scale-95" />
			<span>Add to Wishlist</span>
		</Button>
	);
};

export default WishlistButton;
