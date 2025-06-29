"use client";

import { Product } from "@/typings";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import ProductCard from "./Product";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { redirect, useSearchParams } from "next/navigation";

type Props = {
	products: Product[];
	totalProducts: number;
	category?: string;
};

const Products = ({ products, totalProducts, category }: Props) => {
	const searchParams = useSearchParams();
	const pageNumber = Number(searchParams.get("page")) || 1;
	const totalPages = Math.ceil(totalProducts / 6);

	if (pageNumber > totalPages) {
		redirect(`/products?page=${totalPages}&category=`);
	}

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
				{/* Pagination */}
				{!category && (
					<Pagination className="mt-10">
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious
									href={`/products?page=${pageNumber - 1}&category=`}
								/>
							</PaginationItem>
							{Array.from({ length: totalPages }, (_, index) => (
								<PaginationItem key={index}>
									<PaginationLink
										href={`/products?page=${index + 1}&category=`}
										className={`${
											pageNumber === index + 1
												? "bg-neutral-200 text-black"
												: "text-gray-700 hover:bg-gray-100"
										} px-3 py-2 rounded-md`}>
										{index + 1}
									</PaginationLink>
								</PaginationItem>
							))}
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink
									href={`/products?page=${totalPages}&category=`}
									className="px-3 py-2 rounded-md">
									{totalPages}
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationNext
									href={`/products?page=${pageNumber + 1}&category=`}
								/>
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				)}
			</MaxWidthWrapper>
		</section>
	);
};

export default Products;
