"use client";

import { FaRegTrashAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import { deleteAddress } from "@/lib/actions/address.action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface DeleteAddressButtonProps {
	id: string;
	userId: string;
}

const DeleteAddressButton = ({ id, userId }: DeleteAddressButtonProps) => {
	const router = useRouter();
	const handleDelete = async () => {
		try {
			await toast.promise(
				new Promise(async (resolve, reject) => {
					const response = await deleteAddress(id, userId);

					// If deletion failed (e.g., last address restriction), reject the promise
					if (!response.success) {
						reject(response.message); // Directly pass error message as string
					} else {
						resolve(response);
					}
				}),
				{
					pending: "Deleting Address...",
					success: "Address deleted successfully!",
					error: "Cannot delete last address.", // Default error message
				}
			);

			// Refresh UI after successful deletion
			router.refresh(); // If using Next.js 13+ with App Router
		} catch (error) {}
	};

	return (
		<Button
			onClick={handleDelete}
			variant={"destructive"}
			size={"icon"}
			className="rounded-full size-8 cursor-pointer ml-2">
			<FaRegTrashAlt />
		</Button>
	);
};

export default DeleteAddressButton;
