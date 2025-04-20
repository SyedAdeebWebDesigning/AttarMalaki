"use client";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	email: z
		.string()
		.email("Invalid email address")
		.nonempty("Email is required"),
});

const NewsletterSignup = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
		form.reset();
	}

	return (
		<section className="py-20">
			<div className="max-w-2xl mx-auto text-center px-4">
				<h2 className="text-2xl font-semibold text-gray-900 mb-4">
					Join the Royal Circle
				</h2>
				<p className="text-gray-600 mb-6">
					Be the first to discover our latest releases, behind the scenes
					perfumery stories, and exclusive event invites.
				</p>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="">
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder="Enter your email" {...field} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type="submit" className="w-full mt-4 cursor-pointer">
							Subscribe
						</Button>
					</form>
				</Form>
			</div>
		</section>
	);
};

export default NewsletterSignup;
