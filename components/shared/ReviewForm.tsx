"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { addProductReview } from "@/lib/actions/products/products.action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
	comment: z.string().min(1, "Comment is required"),
	rating: z
		.number()
		.min(1, "Rating is required")
		.max(5, "Rating must be between 1 and 5"),
});

const ReviewForm = ({
	userId,
	productId,
}: {
	userId: string;
	productId: string;
}) => {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	if (!userId || !productId) {
		return <div className="text-red-500">User or Product ID is missing.</div>;
	}

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			comment: "",
			rating: 0,
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			setIsLoading(true);
			const review = await addProductReview(
				userId,
				productId,
				values.comment,
				values.rating
			);

			if (review.success === true) {
				toast.success("Review submitted successfully!", {
					onClose: () => {
						form.reset();
						router.refresh(); // Refresh the page to show the new review
						setIsLoading(false);
					},
				});
			}
		} catch (error) {
			toast.error("Error submitting review", {
				onClose: () => {
					setIsLoading(false);
				},
			});
		}
	}
	return (
		<div className="w-full sm:w-1/2 p-6 border-dashed border-2 rounded-2xl">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
					{/* Star Rating Field */}
					<FormField
						control={form.control}
						name="rating"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Rating</FormLabel>
								<FormControl>
									<div className="flex items-center gap-1">
										{[...Array(5)].map((_, index) => {
											const starValue = index + 1;
											return (
												<FaStar
													key={index}
													size={24}
													className={`cursor-pointer transition-colors ${
														starValue <= field.value
															? "text-[#FFA439]"
															: "text-gray-300"
													}`}
													onClick={() => field.onChange(starValue)}
												/>
											);
										})}
									</div>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="comment"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Comment</FormLabel>
								<FormControl>
									<Input placeholder="Write your comment" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading ? (
							<p className="text-center">
								<Loader2 className="animate-spin size-7" />
							</p>
						) : (
							"Submit Review"
						)}
					</Button>
				</form>
			</Form>
		</div>
	);
};

export default ReviewForm;
