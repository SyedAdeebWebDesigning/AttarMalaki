import Products from "@/components/shared/Products";
import { getProducts } from "@/lib/actions/products/products.action";
import { Product } from "@/typings";
import { redirect } from "next/navigation";

type PageProps = {
	searchParams?: { page?: string };
};

const Page = async ({ searchParams }: PageProps) => {
	const pageParam = searchParams?.page ?? "1";
	const pageNumber = Number(pageParam);

	if (isNaN(pageNumber) || pageNumber < 1) {
		redirect("/products?page=1");
	}

	const products = (await getProducts(pageNumber)) as Product[];

	return (
		<section className="pt-20">
			<div className="flex flex-col items-center mb-10 text-center">
				<h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
				<p className="text-muted-foreground max-w-2xl">
					Discover our luxurious collection of Arabic perfumes.
				</p>
			</div>
			<Products products={products} />
		</section>
	);
};

export default Page;
