"use client";

import { Product } from "@/typings";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { redirect } from "next/navigation";
import ProductCard from "./Product";

type Props = {
	products: Product[];
};

const Products = ({ products }: Props) => {
	return (
		<section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
			<MaxWidthWrapper>
				<div className="">
					<div className="flex flex-col items-center mb-10 text-center">
						<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
							Discover Our Collection
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl">
							Immerse yourself in the essence of luxury with our handpicked
							selection of premium Arabic attars.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{products.map((product) => {
							// Sort prices from lowest effective price
							const sortedQuantities = [...product.quantities].sort((a, b) => {
								const priceA =
									a.discountPrice && a.discountPrice > 0
										? a.discountPrice
										: a.price;
								const priceB =
									b.discountPrice && b.discountPrice > 0
										? b.discountPrice
										: b.price;
								return priceA - priceB;
							});
							const lowest = sortedQuantities[0];

							return (
								<ProductCard
									lowest={lowest}
									product={product}
									key={product.id}
								/>
							);
						})}
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Products;
