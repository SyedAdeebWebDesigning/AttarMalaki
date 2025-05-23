import { ProductDetails } from "@/components/shared/ProductDetails";
import { getProductBySlug } from "@/lib/actions/products.action";
import { Product } from "@/typings";



const Page = async ({ params }) => {
	const { slug } = params;

	const product = (await getProductBySlug(slug)) as Product;

	if (!product) return <div>Product not found</div>;

	return <ProductDetails product={product} />;
};

export default Page;
