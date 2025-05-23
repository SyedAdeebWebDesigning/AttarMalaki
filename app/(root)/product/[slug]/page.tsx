import { ProductDetails } from "@/components/shared/ProductDetails";
import { getProductBySlug } from "@/lib/actions/products.action";
import { Product } from "@/typings";
import { Metadata } from "next";

interface PageProps {
	params: {
		slug: string;
	};
}

const Page = async ({ params }: PageProps) => {
	const { slug } = params;
	const product: any = await getProductBySlug(slug);

	if (!product) return <div>Product not found.</div>;

	return <ProductDetails product={product} />;
};

export default Page;
