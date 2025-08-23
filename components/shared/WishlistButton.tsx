"use client";

import { Heart } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { addToWishlist } from "@/lib/actions/wishlist/addToWishlist.action";
import { removeToWishlist } from "@/lib/actions/wishlist/removeToWishlist.action";
import { cn } from "@/lib/utils";
import { TbHeartFilled } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useState } from "react";

const WishlistButton = ({
	userId,
	productId,
	isWishlist: initialIsWishlist = false,
}: {
	userId: string;
	productId: string;
	isWishlist?: boolean;
}) => {
	const router = useRouter();
	const [isWishlist, setIsWishlist] = useState(initialIsWishlist);
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		if (loading) return;
		setLoading(true);

		try {
			if (isWishlist) {
				// Optimistically update
				setIsWishlist(false);
				const response = await removeToWishlist(userId, productId);

				if (response.success) {
					toast.success("Removed from wishlist");
				} else {
					toast.error("Error removing from wishlist");
					setIsWishlist(true); // rollback
				}
			} else {
				// Optimistically update
				setIsWishlist(true);
				const response = await addToWishlist(userId, productId);

				if (response.success) {
					toast.success("Added to wishlist");
				} else {
					toast.error("Error adding to wishlist");
					setIsWishlist(false); // rollback
				}
			}
		} catch (error) {
			toast.error("Something went wrong");
			setIsWishlist(initialIsWishlist); // rollback to original
		} finally {
			setLoading(false);
			router.refresh(); // keep server state in sync
		}
	};

	return (
		<Button
			onClick={handleClick}
			variant="outline"
			disabled={loading}
			className={cn("flex gap-2 border-gray-300", {
				"text-red-500": isWishlist,
			})}>
			{isWishlist ? (
				<TbHeartFilled className="size-4 transition-transform hover:scale-105 active:scale-95 text-red-500" />
			) : (
				<Heart className="size-4 transition-transform hover:scale-105 active:scale-95" />
			)}
			<span>{isWishlist ? "Remove from Wishlist" : "Add to Wishlist"}</span>
		</Button>
	);
};

export default WishlistButton;
