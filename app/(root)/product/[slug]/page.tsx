import { ProductDetails } from "@/components/shared/ProductDetails";
import { getProductBySlug } from "@/lib/actions/products/getProductBySlug";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { Product, user } from "@/typings";
import { currentUser } from "@clerk/nextjs/server";

type PageProps = {
	params: Promise<{ slug: string }>;
};

export const revalidate = 3600; // ISR cache for 1 hour
export const dynamic = "force-dynamic"; // ensure middleware/auth runs

const Page = async ({ params }: PageProps) => {
	const { slug } = await params;
	const product = (await getProductBySlug(slug)) as Product | null;
	const _ = await currentUser();
	const userClerkId = _?.id;
	const user = (await getUserByClerkId(userClerkId)) as user;
	const userId = user?.id;
	if (!user) {
		return <div>Please sign in to view product details.</div>;
	}
	if (!product) return <div>Product not found</div>;

	return <ProductDetails product={product} userId={userId} />;
};

export default Page;
