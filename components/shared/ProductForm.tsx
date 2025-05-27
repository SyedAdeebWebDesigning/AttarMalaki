"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Size } from "@prisma/client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useEffect, useState } from "react";

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
import { toast } from "react-toastify";
import { createProduct } from "@/lib/actions/products/products.action";
import { useRouter } from "next/navigation";

const formSchema = z.object({
	slug: z.string().min(1, { message: "Slug is required." }),
	name: z.string().min(1, { message: "Name is required." }),
	description: z.string().min(1, { message: "Description is required." }),
	shortDescription: z.string().optional(),
	category: z.string().min(1, { message: "Category is required." }),
	tags: z.string().optional(),
	image: z.string().min(1, { message: "Image URL is required." }),
	isFeatured: z.boolean().optional(),
	isBestSeller: z.boolean().optional(),
	ml20: z.number().min(1, { message: "Price required for 20ml." }),
	ml50: z.number().optional(),
	ml100: z.number().optional(),
	stock20: z.number().min(0, { message: "Stock required for 20ml." }),
	discount20: z.number().optional(),
	stock50: z.number().optional(),
	discount50: z.number().optional(),
	stock100: z.number().optional(),
	discount100: z.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ProductFormProps {}

const ProductForm = ({}: ProductFormProps) => {
	const router = useRouter();
	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			slug: "",
			name: "",
			description: "",
			shortDescription: "",
			category: "",
			tags: "",
			image: "",
			isFeatured: false,
			isBestSeller: false,
			ml20: 0,
			ml50: 0,
			ml100: 0,
			stock20: 0,
			discount20: undefined,
			stock50: 0,
			discount50: undefined,
			stock100: 0,
			discount100: undefined,
		},
	});

	const [showQuantities, setShowQuantities] = useState(false);

	useEffect(() => {
		const subscription = form.watch((value, { name }) => {
			if (name === "name") {
				const slugify = (str: string) => {
					return str
						.toLowerCase()
						.trim()
						.replace(/[\s_]+/g, "-")
						.replace(/[^a-z0-9-]/g, "")
						.replace(/-+/g, "-")
						.replace(/^-+|-+$/g, "");
				};
				const newSlug = slugify(value.name || "");
				form.setValue("slug", newSlug);
			}
		});
		return () => subscription.unsubscribe();
	}, [form]);

	async function onSubmit(values: FormValues) {
		// Convert tags from comma-separated string to array
		const tagsArray = values.tags
			? values.tags
					.split(",")
					.map((tag) => tag.trim())
					.filter(Boolean)
			: [];

		const productData = {
			slug: values.slug,
			name: values.name,
			description: values.description,
			shortDescription: values.shortDescription,
			category: values.category,
			tags: tagsArray,
			image: values.image,
			isFeatured: values.isFeatured ?? false,
			isBestSeller: values.isBestSeller ?? false,
			quantities: [
				values.ml20 && {
					size: "ML_20",
					price: values.ml20,
					stock: values.stock20,
					discountPrice: values.discount20 || undefined,
				},
				values.ml50 && {
					size: "ML_50",
					price: values.ml50,
					stock: values.stock50 || 0,
					discountPrice: values.discount50 || undefined,
				},
				values.ml100 && {
					size: "ML_100",
					price: values.ml100,
					stock: values.stock100 || 0,
					discountPrice: values.discount100 || undefined,
				},
			].filter(Boolean),
		};

		console.log(productData);

		try {
			await createProduct({
				...productData,
				quantities: productData.quantities.map((q) => ({
					...q,
					size: q.size as Size,
				})),
			});
			toast.success("Product created successfully", {
				onClose: () => {
					router.push("/dashboard/products");
				},
			});
		} catch (error) {
			toast.error("Error creating product");
		}
	}

	return (
		<section className="w-full max-w-xl mx-auto">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="slug"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Slug</FormLabel>
								<FormControl>
									<Input placeholder="product-slug" {...field} readOnly />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input placeholder="Product Name" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<textarea
										placeholder="Detailed description"
										className="w-full rounded-md border border-gray-300 px-3 py-2"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="shortDescription"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Short Description</FormLabel>
								<FormControl>
									<textarea
										placeholder="Short description (optional)"
										className="w-full rounded-md border border-gray-300 px-3 py-2"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<FormControl>
									<Input placeholder="Category" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="tags"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Tags (comma separated)</FormLabel>
								<FormControl>
									<Input placeholder="tag1, tag2, tag3" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="image"
						render={({ field }) => {
							// Convert File to base64 string
							const toBase64 = (file: File): Promise<string> =>
								new Promise((resolve, reject) => {
									const reader = new FileReader();
									reader.readAsDataURL(file);
									reader.onload = () => resolve(reader.result as string);
									reader.onerror = (error) => reject(error);
								});

							return (
								<FormItem>
									<FormLabel>Upload Image</FormLabel>
									<FormControl>
										<Input
											type="file"
											accept="image/*"
											onChange={async (e) => {
												const file = e.target.files?.[0];
												if (file) {
													const base64 = await toBase64(file);
													field.onChange(base64);
												}
											}}
										/>
									</FormControl>
									{field.value && (
										<img
											src={field.value}
											alt="Preview"
											className="mt-2 max-h-48 object-contain"
										/>
									)}
									<FormMessage />
								</FormItem>
							);
						}}
					/>

					<FormField
						control={form.control}
						name="isFeatured"
						render={({ field }) => (
							<FormItem className="flex items-center space-x-2">
								<FormControl>
									<input
										type="checkbox"
										checked={field.value}
										onChange={(e) => field.onChange(e.target.checked)}
										className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
								</FormControl>
								<FormLabel className="mb-0 cursor-pointer">Featured</FormLabel>
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="isBestSeller"
						render={({ field }) => (
							<FormItem className="flex items-center space-x-2">
								<FormControl>
									<input
										type="checkbox"
										checked={field.value}
										onChange={(e) => field.onChange(e.target.checked)}
										className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
									/>
								</FormControl>
								<FormLabel className="mb-0 cursor-pointer">
									Best Seller
								</FormLabel>
							</FormItem>
						)}
					/>

					<Button
						type="button"
						onClick={() => setShowQuantities((prev) => !prev)}
						className="w-full">
						{showQuantities ? "Hide Quantities" : "Add Quantity"}
					</Button>
					{showQuantities && (
						<div className="space-y-6">
							{["20", "50", "100"].map((ml) => (
								<div key={ml} className="border rounded p-4 space-y-4">
									<h3 className="font-semibold text-lg">{ml}ml</h3>
									<FormField
										control={form.control}
										name={`ml${ml}` as keyof FormValues}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Price</FormLabel>
												<FormControl>
													<Input
														type="number"
														value={
															typeof field.value === "number" ? field.value : ""
														}
														onChange={(e) =>
															field.onChange(Number(e.target.value))
														}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`stock${ml}` as keyof FormValues}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Stock</FormLabel>
												<FormControl>
													<Input
														type="number"
														min={0}
														value={
															typeof field.value === "number" ? field.value : ""
														}
														onChange={(e) =>
															field.onChange(Number(e.target.value))
														}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name={`discount${ml}` as keyof FormValues}
										render={({ field }) => (
											<FormItem>
												<FormLabel>Discount Price</FormLabel>
												<FormControl>
													<Input
														type="number"
														value={
															typeof field.value === "number" ? field.value : ""
														}
														onChange={(e) =>
															field.onChange(Number(e.target.value))
														}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>
							))}
						</div>
					)}
					<Button type="submit" className="w-full mt-4">
						Submit
					</Button>
				</form>
			</Form>
		</section>
	);
};

export default ProductForm;
