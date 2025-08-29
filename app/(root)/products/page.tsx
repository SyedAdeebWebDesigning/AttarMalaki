import Products from "@/components/shared/Products";
import { getProducts } from "@/lib/actions/products/getProducts";
import { getTotalProductsCount } from "@/lib/actions/products/products.action";
import { Product } from "@/typings";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { ProductCardSkeleton } from "@/components/shared/ProductSkeleton";

type PageProps = {
	searchParams?: { page?: string; category?: string };
};

const Page = ({ searchParams }: PageProps) => {
	return (
		<section className="pt-20">
			<Suspense
				fallback={
					<MaxWidthWrapper>
						<div className="flex flex-col items-center mb-10 text-center pt-20">
							<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
								Discover Our Collection
							</h2>
							<p className="text-lg text-muted-foreground max-w-2xl">
								Immerse yourself in the essence of luxury with our handpicked
								selection of premium Arabic attars.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{Array.from({ length: 9 }).map((_, i) => (
								<ProductCardSkeleton key={i} />
							))}
						</div>
					</MaxWidthWrapper>
				}>
				<RenderProducts searchParams={searchParams} />
			</Suspense>
		</section>
	);
};

export default Page;

async function RenderProducts({ searchParams }: PageProps) {
	const pageParam = searchParams?.page ?? "1";
	const pageNumber = Number(pageParam);

	if (isNaN(pageNumber) || pageNumber < 1 || !searchParams?.page) {
		redirect("/products?page=1&category=");
	}

	const totalProducts = await getTotalProductsCount();

	const products = (await getProducts(
		pageNumber,
		searchParams?.category
	)) as Product[];

	return (
		<Products
			pageNumber={pageNumber}
			products={products}
			totalProducts={totalProducts}
			category={searchParams?.category}
		/>
	);
}
