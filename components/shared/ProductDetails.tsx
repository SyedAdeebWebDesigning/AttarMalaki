"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Product, ProductQuantity } from "@/typings";
import { formatCurrency } from "@/lib/utils";
import { Separator } from "../ui/separator";
import AddToBag from "./AddToBag";

type Props = {
	product: Product & { quantities: ProductQuantity[] };
};

const sizeLabels: Record<string, string> = {
	ML_20: "20 ml",
	ML_50: "50 ml",
	ML_100: "100 ml",
};

export function ProductDetails({ product }: Props) {
	const [selectedQuantity, setSelectedQuantity] = useState<ProductQuantity>(
		product.quantities[0]
	);

	const handleVariantClick = (quantity: ProductQuantity) => {
		setSelectedQuantity(quantity);
	};

	return (
		<section className="text-gray-600 body-font overflow-hidden pt-20">
			<div className="container px-5 py-24 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
					{/* Left: Product Image */}
					<div className="w-full aspect-square relative overflow-hidden rounded-lg">
						<Image
							fill
							alt={product.name}
							src={product.image}
							className="object-cover object-center rounded-lg"
						/>
					</div>

					{/* Right: Product Info */}
					<div>
						<h2 className="text-sm title-font text-gray-500 tracking-widest mb-1">
							{product.category}
						</h2>
						<h1 className="text-gray-900 text-3xl font-semibold mb-4">
							{product.name}
						</h1>

						<p className="leading-relaxed mb-4 text-justify">
							{product.description}
						</p>

						<p className="leading-relaxed mb-2 font-medium">Tags:</p>

						<div className="flex flex-wrap gap-2 mb-4">
							{product.tags.map((tag) => (
								<span
									key={tag}
									className="text-sm font-medium border-[#dcdcdc] border text-black bg-[#ffffff] rounded-full px-3 py-2 max-w-fit text-center">
									{tag}
								</span>
							))}
						</div>

						<Separator />

						{/* Variant Buttons */}
						<div className="my-6 flex flex-wrap gap-3">
							{product.quantities.map((quantity) => (
								<Button
									key={quantity.id}
									onClick={() => handleVariantClick(quantity)}
									variant="outline"
									className={
										selectedQuantity.id === quantity.id
											? "border-[#D12A5C] text-[#D12A5C] bg-[#FFF1F4]"
											: ""
									}>
									{sizeLabels[quantity.size]}
								</Button>
							))}
						</div>

						{/* Price and Stock */}
						<div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
							<div>
								<p className="title-font font-semibold text-2xl text-gray-900">
									{formatCurrency(
										selectedQuantity.discountPrice || selectedQuantity.price
									)}
								</p>
								<p className="text-sm text-gray-500 mt-1">
									{selectedQuantity.stock > 0
										? `In Stock: ${selectedQuantity.stock}`
										: "Out of Stock"}
								</p>
							</div>
							<AddToBag />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
