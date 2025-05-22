import React from "react";
import { Product } from "@/typings";

import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

type Props = {
	products: Product[];
};

// Format size string like "ML_20" or "20ML" to "20 ml"
const formatSize = (size: string) => {
	const num = size.match(/\d+/)?.[0];
	return num ? `${num} ml` : size;
};

// Extract all unique sizes across all products and sort them (numeric if possible)
const getAllSizes = (products: Product[]): string[] => {
	const sizesSet = new Set<string>();
	products.forEach((product) => {
		product.quantities.forEach((qty) => sizesSet.add(qty.size));
	});
	return Array.from(sizesSet).sort((a, b) => {
		const numA = parseInt(a);
		const numB = parseInt(b);
		if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
		return a.localeCompare(b);
	});
};

const ProductsTable = ({ products }: Props) => {
	const allSizes = getAllSizes(products);

	return (
		<div className="overflow-x-auto">
			<Table className="min-w-[900px] border border-gray-300">
				<TableCaption>
					A list of your products with prices and stock.
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className="border-r border-gray-300" rowSpan={2}>
							#
						</TableHead>
						<TableHead className="border-r border-gray-300" rowSpan={2}>
							Name
						</TableHead>
						<TableHead className="border-r border-gray-300" rowSpan={2}>
							Category
						</TableHead>
						<TableHead
							className="text-center border-r"
							colSpan={allSizes.length}>
							Stock
						</TableHead>
						<TableHead
							className="border-r border-gray-300 text-center"
							colSpan={allSizes.length}>
							Price (₹)
						</TableHead>
					</TableRow>
					<TableRow>
						{allSizes.map((size, i) => (
							<TableHead
								key={`price-${size}`}
								className={`text-center border-r ${
									i === allSizes.length - 1 ? "border-r border-gray-300" : ""
								}`}>
								{formatSize(size)}
							</TableHead>
						))}
						{allSizes.map((size, i) => (
							<TableHead
								key={`stock-${size}`}
								className={`text-center border-r ${
									i === allSizes.length - 1 ? "border-r border-gray-300" : ""
								}`}>
								{formatSize(size)}
							</TableHead>
						))}
					</TableRow>
				</TableHeader>
				<TableBody>
					{products.map((product, index) => {
						const priceMap = new Map(
							product.quantities.map((q) => [q.size, q.price])
						);
						const discountPriceMap = new Map(
							product.quantities.map((q) => [q.size, q.discountPrice || 0])
						);
						const stockMap = new Map(
							product.quantities.map((q) => [q.size, q.stock])
						);

						return (
							<TableRow key={product.id} className="hover:bg-muted">
								<TableCell className="border-r border-gray-300">
									{index + 1}
								</TableCell>
								<TableCell className="border-r border-gray-300">
									{product.name}
								</TableCell>
								<TableCell className="border-r border-gray-300">
									{product.category}
								</TableCell>

								{/* Stock */}
								{allSizes.map((size, i) => (
									<TableCell
										key={`stock-${product.id}-${size}`}
										className={`text-center border-r ${
											i === allSizes.length - 1 ? "border-gray-300" : ""
										}`}>
										{stockMap.get(size) ?? "-"}
									</TableCell>
								))}

								{/* Price with discount */}
								{allSizes.map((size) => {
									const price = priceMap.get(size);
									const discountPrice = discountPriceMap.get(size);
									if (!price) {
										return (
											<TableCell
												key={`price-${product.id}-${size}`}
												className="text-center border-r border-gray-300">
												-
											</TableCell>
										);
									}
									return (
										<TableCell
											key={`price-${product.id}-${size}`}
											className="text-center border-r border-gray-300">
											{discountPrice && discountPrice !== 0 ? (
												<>
													<span className="line-through text-gray-500 mr-1">
														₹{price}
													</span>
													<span className="text-green-600 font-semibold">
														₹{discountPrice}
													</span>
												</>
											) : (
												`₹${price}`
											)}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default ProductsTable;
