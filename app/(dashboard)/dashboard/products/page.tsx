import Heading from "@/components/shared/Heading";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/lib/actions/products.action";
import Link from "next/link";

interface pageProps {}

const page = async ({}: pageProps) => {
	const products = await getProducts();
	console.log(products.length);

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
		<section>
			<Heading>Product</Heading>
		</section>
	);
};

export default page;
