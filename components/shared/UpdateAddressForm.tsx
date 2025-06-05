"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { getAddressById, updateAddress } from "@/lib/actions/address.action";

const formSchema = z.object({
	label: z.string().min(2, { message: "Label must be at least 2 characters." }),
	street: z
		.string()
		.min(2, { message: "Street must be at least 2 characters." }),
	city: z.string().min(2, { message: "City must be at least 2 characters." }),
	state: z.string().min(2, { message: "State must be at least 2 characters." }),
	country: z
		.string()
		.min(2, { message: "Country must be at least 2 characters." }),
	zipCode: z.string().regex(/^\d{4,10}$/, {
		message: "Invalid Zip Code format. It should be 4-10 digits.",
	}),
});

const UpdateAddressForm = ({ id }: { id: string }) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);
	const [addressData, setAddressData] = useState(null);

	// Fetch existing address
	useEffect(() => {
		const fetchAddress = async () => {
			const response = await getAddressById(id);
			if (response.success) {
				setAddressData(response.address as any);
				form.reset(response.address as any); // Pre-fill form
				setIsLoading(false);
			} else {
				toast.error("Failed to fetch address.");
				router.push("/");
			}
		};
		fetchAddress();
	}, [id]);

	// Initialize Form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			label: "",
			street: "",
			city: "",
			state: "",
			country: "",
			zipCode: "",
		},
	});

	// Function to update address
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		await toast
			.promise(updateAddress(id, values), {
				pending: "Updating address...",
				success: "Address updated successfully!",
				error: "Failed to update address.",
			})
			.then(() => {
				router.push("/");
			});
	};

	if (isLoading) return <p>Loading...</p>;

	return (
		<div className="max-w-xl mx-auto px-3 py-20">
			<MaxWidthWrapper>
				<Form {...form}>
					<h1 className="text-2xl font-semibold my-20 text-left">
						Update Address
					</h1>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
						{/* Label Field */}
						<FormField
							control={form.control}
							name="label"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Label</FormLabel>
									<FormControl>
										<Input placeholder="Home, Work, etc." {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Zip Code Field */}
						<FormField
							control={form.control}
							name="zipCode"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Zip Code</FormLabel>
									<FormControl>
										<Input placeholder="Enter your zip code" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* City Field */}
						<FormField
							control={form.control}
							name="city"
							render={({ field }) => (
								<FormItem>
									<FormLabel>City</FormLabel>
									<FormControl>
										<Input placeholder="Enter your city" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* State Field */}
						<FormField
							control={form.control}
							name="state"
							render={({ field }) => (
								<FormItem>
									<FormLabel>State</FormLabel>
									<FormControl>
										<Input placeholder="Enter your state" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Country Field */}
						<FormField
							control={form.control}
							name="country"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Country</FormLabel>
									<FormControl>
										<Input placeholder="Enter your country" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Street Field */}
						<FormField
							control={form.control}
							name="street"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Street</FormLabel>
									<FormControl>
										<Input placeholder="Enter your street" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* Submit Button */}
						<Button
							type="submit"
							disabled={form.formState.isSubmitting}
							className="w-full cursor-pointer hover:scale-[102%] active:scale-[98%] transition-all duration-100 ease-in-out"
							size={"lg"}>
							Update Address
						</Button>
					</form>
				</Form>
			</MaxWidthWrapper>
		</div>
	);
};

export default UpdateAddressForm;
