import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/actions/products.action";
import Link from "next/link";
import { Product } from "@/typings";
import ProductsTable from "@/components/shared/ProductsTable";
interface pageProps {}

const page = async ({}: pageProps) => {
	const products = (await getProducts()) as Product[];

	if (products.length === 0) {
		return (
			<section>
				<Heading>Product</Heading>
				<div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
					<p className="text-3xl my-3">No products found</p>
					<Link href={"/dashboard/products/new"}>
						<Button className="">Add Product</Button>
					</Link>
				</div>
			</section>
		);
	}

	return (
		<section className="relative">
			<Heading>Product</Heading>
			<Link href={"/dashboard/products/new"} className="absolute top-0 right-4">
				<Button className="">Add Product</Button>
			</Link>
			<ProductsTable products={products} />
		</section>
	);
};

export default page;
