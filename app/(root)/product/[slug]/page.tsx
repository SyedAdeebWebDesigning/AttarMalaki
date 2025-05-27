import { ProductDetails } from "@/components/shared/ProductDetails";
import { getProductBySlug } from "@/lib/actions/products/getProductBySlug";
import { Product } from "@/typings";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export const revalidate = 3600; // ISR cache for 1 hour
export const dynamic = "force-dynamic"; // ensure middleware/auth runs

const Page = async ({ params }: PageProps) => {
	const { slug } = await params;

	const product = (await getProductBySlug(slug)) as Product | null;

	if (!product) return <div>Product not found</div>;

	return <ProductDetails product={product} />;
};

export default Page;
