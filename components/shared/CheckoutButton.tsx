"use client";

import { createCheckoutSession } from "@/lib/actions/stripe/checkout";
import { Button } from "../ui/button";
import { toast } from "react-toastify";

const CheckoutButton = () => {
	const handleClick = async () => {
		try {
			const res = await createCheckoutSession();
			if (res.url) {
				window.location.href = res.url;
			}
		} catch (err) {
			toast.error("Checkout failed!");
			console.error(err);
		}
	};
	return (
		<Button
			onClick={handleClick}
			className="w-full text-white py-4 rounded-xl font-semibold text-lg transition-all shadow hover:shadow-lg mb-3"
			size="lg">
			Proceed to Checkout
		</Button>
	);
};

export default CheckoutButton;
