"use client";

import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { z } from "zod";
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
import { useUser } from "@clerk/nextjs";
import { addAddress } from "@/lib/actions/address.action";
import { toast } from "react-toastify";

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

const Page = () => {
	const router = useRouter();
	const [isCityEditable, setIsCityEditable] = useState(false);
	const [isCountryEditable, setIsCountryEditable] = useState(false);
	const [isStateEditable, setIsStateEditable] = useState(false);
	const user = useUser();

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

	// Function to fetch address details based on zip code
	const fetchAddressDetails = async (zipCode: string) => {
		try {
			const response = await fetch(`https://api.zippopotam.us/in/${zipCode}`);
			if (!response.ok) {
				setIsCityEditable(true);
				setIsStateEditable(true);
				return;
			}

			const data = await response.json();
			if (data?.places?.length > 0) {
				form.setValue("city", data.places[0]["place name"], {
					shouldValidate: true,
				});
				form.setValue("state", data.places[0]["state"], {
					shouldValidate: true,
				});
				form.setValue("country", data.country, { shouldValidate: true });
				setIsCityEditable(false);
				setIsStateEditable(false);
				setIsCountryEditable(false);
			} else {
				setIsCityEditable(true);
				setIsStateEditable(true);
				setIsCountryEditable(true);
			}
		} catch (error) {
			console.error("Error fetching address:", error);
			setIsCityEditable(true);
			setIsStateEditable(true);
		}
	};

	// Watch for zip code changes
	useEffect(() => {
		const subscription = form.watch((value, { name }) => {
			if (name === "zipCode" && value.zipCode && value?.zipCode?.length >= 4) {
				fetchAddressDetails(value.zipCode as string);
			}
		});
		return () => subscription.unsubscribe();
	}, [form.watch]);

	// Form submit handler
	async function onSubmit(values: z.infer<typeof formSchema>) {
		const userId = user.user?.id;
		const addressData = {
			label: values.label,
			street: values.street,
			city: values.city,
			state: values.state,
			country: values.country,
			zipCode: values.zipCode,
		};

		await toast
			.promise(addAddress(userId!, addressData), {
				pending: "Adding address...",
				success: "Address added successfully!",
				error: "Failed to add address.",
			})
			.then(() => {
				router.push("/"); // Redirect to homepage after success
			});
	}

	const type = useSearchParams().get("type");

	return (
		<div className="max-w-xl mx-auto px-3 py-20">
			<MaxWidthWrapper>
				<Form {...form}>
					<h1 className="text-2xl font-semibold my-20 text-left">
						Add Address
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
										<Input
											placeholder={`${
												isCityEditable
													? "Enter your city"
													: "City will auto-fill"
											}`}
											{...field}
											disabled={!isCityEditable}
										/>
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
										<Input
											placeholder={`${
												isCityEditable
													? "Enter your state"
													: "State will auto-fill"
											}`}
											{...field}
											disabled={!isStateEditable}
										/>
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
										<Input
											placeholder={`${
												isCountryEditable
													? "Enter your country"
													: "Country will auto-fill"
											}`}
											{...field}
											disabled={!isCountryEditable}
										/>
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
							disabled={
								form.formState.isSubmitting ||
								!form.formState.isValid ||
								!user.isLoaded
							}
							className="w-full cursor-pointer hover:scale-[102%] active:scale-[98%] transition-all duration-100 ease-in-out"
							size={"lg"}>
							Add Address
						</Button>
					</form>
				</Form>
			</MaxWidthWrapper>
		</div>
	);
};

export default Page;
