"use client";

import { Product } from "@/typings";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { redirect } from "next/navigation";

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
								<Card
									onClick={() => {
										redirect(`/product/${product.slug}`);
									}}
									key={product.id}
									className="overflow-hidden transition-all duration-200 hover:shadow-md flex flex-col py-0 rounded cursor-pointer">
									<div className="aspect-square relative overflow-hidden">
										<Image
											src={product.image || "/placeholder.svg"}
											alt={product.name}
											fill
											loading="lazy"
											className="object-contain transition-transform duration-300"
										/>
									</div>
									<CardContent className="p-4 flex flex-col h-40">
										<div>
											<div className="flex items-center justify-between mb-2">
												<h3 className="font-semibold text-2xl">
													{product.name}
												</h3>
												<p className="font-bold text-xl mt-auto pt-2">
													{lowest.discountPrice && lowest.discountPrice > 0 ? (
                                                    <>
															<span className="line-through text-muted-foreground mr-2 text-sm">
																{formatCurrency(lowest.price)}
															</span>
															<span>
																{formatCurrency(lowest.discountPrice)}
															</span>
														</>
													) : (
														<span>{formatCurrency(lowest.price)}</span>
													)}
												</p>
											</div>
											<p className="text-muted-foreground text-sm line-clamp-3 mt-1 text-justify">
												{product.description}
											</p>
										</div>
									</CardContent>
									{/* <CardFooter className="p-4 pt-0 flex gap-2">
										<Button variant="outline" asChild>
											<Link href={`/product/${product.slug}`}>View More</Link>
										</Button>
									</CardFooter> */}
								</Card>
							);
						})}
					</div>
				</div>
			</MaxWidthWrapper>
		</section>
	);
};

export default Products;
