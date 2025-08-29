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
import { redirect } from "next/navigation";

type Props = {
	products: Product[];
	totalProducts: number;
	category?: string;
	pageNumber: number;
};

const Products = ({ products, totalProducts, category, pageNumber }: Props) => {
	// ✅ Precompute total pages once
	const totalPages = Math.max(1, Math.ceil(totalProducts / 9));

	// ✅ Redirect early if page out of range
	if (pageNumber > totalPages) {
		redirect(`/products?page=${totalPages}&category=${category ?? ""}`);
	}

	// ✅ Precompute lowest price once per product (not inside render loop)
	const productsWithLowest = products.map((product) => {
		const lowest = product.quantities.reduce(
			(min, q) => {
				const price =
					q.discountPrice && q.discountPrice > 0 ? q.discountPrice : q.price;
				return price < min.price
					? { price, discountPrice: q.discountPrice }
					: min;
			},
			{ price: Infinity, discountPrice: undefined as number | undefined }
		);

		return { product, lowest };
	});

	return (
		<section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
			<MaxWidthWrapper>
				{/* Header */}
				<div className="flex flex-col items-center mb-10 text-center">
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
						Discover Our Collection
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl">
						Immerse yourself in the essence of luxury with our handpicked
						selection of premium Arabic attars.
					</p>
				</div>

				{/* Products Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{productsWithLowest.map(({ product, lowest }) => (
						<ProductCard lowest={lowest} product={product} key={product.id} />
					))}
				</div>

				{/* Pagination */}
				{!category && totalPages > 1 && (
					<Pagination className="mt-10">
						<PaginationContent>
							{/* Prev */}
							{pageNumber > 1 && (
								<PaginationItem>
									<PaginationPrevious
										href={`/products?page=${pageNumber - 1}&category=`}
									/>
								</PaginationItem>
							)}

							{/* Page numbers */}
							{Array.from({ length: totalPages }, (_, i) => i + 1).map(
								(page) => (
									<PaginationItem key={page}>
										<PaginationLink
											href={`/products?page=${page}&category=`}
											className={`${
												pageNumber === page
													? "bg-neutral-200 text-black"
													: "text-gray-700 hover:bg-gray-100"
											} px-3 py-2 rounded-md`}>
											{page}
										</PaginationLink>
									</PaginationItem>
								)
							)}

							{/* Ellipsis + last page if too many */}
							{totalPages > 5 && (
								<>
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
								</>
							)}

							{/* Next */}
							{pageNumber < totalPages && (
								<PaginationItem>
									<PaginationNext
										href={`/products?page=${pageNumber + 1}&category=`}
									/>
								</PaginationItem>
							)}
						</PaginationContent>
					</Pagination>
				)}
			</MaxWidthWrapper>
		</section>
	);
};

export default Products;
