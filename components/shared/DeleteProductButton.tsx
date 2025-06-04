"use client";

import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { deleteBagItem } from "@/lib/actions/bag/bag.action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface DeleteProductButtonProps {
	userId: string;
	cartId: string;
}

const DeleteProductButton = ({ userId, cartId }: DeleteProductButtonProps) => {
	const router = useRouter();

	const handleDelete = async () => {
		try {
			await deleteBagItem(cartId, userId);
			toast.success("Product removed from bag successfully!", {
				onClose: () => {
					router.refresh();
				},
			});
		} catch (error) {
			toast.error("Failed to remove product from bag. Please try again.");
		}
	};

	return (
		<Button
			onClick={handleDelete}
			variant="ghost"
			className="p-2 hover:bg-gray-100 rounded-full transition-colors">
			<Trash2 className="w-5 h-5 text-red-500" />
		</Button>
	);
};

export default DeleteProductButton;
