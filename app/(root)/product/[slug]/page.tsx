import { ProductDetails } from "@/components/shared/ProductDetails";
import { getProductBySlug } from "@/lib/actions/products.action";
import { Product } from "@/typings";

type PageProps = {
	params: Promise<{ slug: string }>;
};

const Page = async ({ params }: PageProps) => {
	const { slug } = await params; // <-- await here

	const product = (await getProductBySlug(slug)) as Product | null;

	if (!product) return <div>Product not found</div>;

	return <ProductDetails product={product} />;
};

export default Page;
