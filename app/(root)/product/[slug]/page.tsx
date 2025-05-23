import { ProductDetails } from "@/components/shared/ProductDetails";
import { getProductBySlug } from "@/lib/actions/products.action";
import { Product } from "@/typings";

type PageProps = {
	params: {
		slug: string;
	};
};

const Page = async ({ params }: PageProps) => {
	const { slug } = params;

	const product = (await getProductBySlug(slug)) as Product;

	if (!product) return <div>Product not found</div>;

	return <ProductDetails product={product} />;
};

export default Page;
