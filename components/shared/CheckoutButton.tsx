"use client";

import { createCheckoutSession } from "@/lib/actions/stripe/checkout";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";

const CheckoutButton = () => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();
	const handleClick = async () => {
		setIsLoading(true);
		try {
			const res = await createCheckoutSession();
			if (res.url) {
				router.push(res.url);
			}
		} catch (err) {
			toast.error("Checkout failed!");
			console.error(err);
		}
		setIsLoading(false);
	};
	return (
		<Button
			disabled={isLoading}
			onClick={handleClick}
			className="w-full text-white py-4 rounded-xl font-semibold text-lg transition-all shadow hover:shadow-lg mb-3 flex items-center justify-center relative"
			size="lg">
			{isLoading ? (
				<Loader2 className="animate-spin size-6" />
			) : (
				"Proceed to Checkout"
			)}
		</Button>
	);
};

export default CheckoutButton;
