import Products from "@/components/shared/Products";
import {
	getProducts,
	getTotalProductsCount,
} from "@/lib/actions/products/products.action";
import { Product } from "@/typings";
import { redirect } from "next/navigation";

type PageProps = {
	searchParams?: { page?: string; category?: string };
};

const Page = async ({ searchParams }: PageProps) => {
	const pageParam = searchParams?.page ?? "1";
	const pageNumber = Number(pageParam);

	if (isNaN(pageNumber) || pageNumber < 1 || !searchParams?.page) {
		redirect("/products?page=1&category=");
	}

	const totalProducts = await getTotalProductsCount();

	const products = (await getProducts(
		pageNumber,
		searchParams.category
	)) as Product[];

	return (
		<section className="pt-20">
			<Products
				products={products}
				totalProducts={totalProducts}
				category={searchParams.category}
			/>
		</section>
	);
};

export default Page;
