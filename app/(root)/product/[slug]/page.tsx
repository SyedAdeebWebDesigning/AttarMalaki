import Heading from "@/components/shared/Heading";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import ProductCard from "@/components/shared/Product";
import { ProductDetails } from "@/components/shared/ProductDetails";
import ReviewBar from "@/components/shared/ReviewBar";
import ReviewForm from "@/components/shared/ReviewForm";
import ReviewList from "@/components/shared/ReviewList";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug } from "@/lib/actions/products/getProductBySlug";
import {
	getProductReviews,
	getRelativeProducts,
} from "@/lib/actions/products/products.action";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { Product, user } from "@/typings";
import { currentUser } from "@clerk/nextjs/server";

type PageProps = {
	params: Promise<{ slug: string }>;
};


const Page = async ({ params }: PageProps) => {
	const { slug } = await params;
	const product = (await getProductBySlug(slug)) as Product | null;
	const _ = await currentUser();
	const userClerkId = _?.id;
	const user = (await getUserByClerkId(userClerkId)) as user;
	const userId = user?.id;
	const productId = product?.id;
	if (!user) {
		return <div>Please sign in to view product details.</div>;
	}
	if (!product) return <div>Product not found</div>;

	const relatedProducts = (await getRelativeProducts(
		product.category,
		product.id
	)) as Product[];

	const productReviews = (await getProductReviews(productId)) as any;

	return (
		<MaxWidthWrapper>
			<section>
				<ProductDetails product={product} userId={userId} />
			</section>

			<Separator className="mx-auto" />

			<section className="py-10">
				<div className="">
					<Heading className="my-10 text-left">Related Products</Heading>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{relatedProducts.map((product) => {
							// Sort prices from lowest effective price
							const sortedQuantities = [...product.quantities].sort((a, b) => {
								const priceA =
									a.discountPrice && a.discountPrice > 0
										? a.discountPrice
										: a.price;
								const priceB =
									b.discountPrice && b.discountPrice > 0
										? b.discountPrice
										: b.price;
								return priceA - priceB;
							});
							const lowest = sortedQuantities[0];
							return (
								<ProductCard
									lowest={lowest}
									product={product}
									key={product.id}
								/>
							);
						})}
					</div>
				</div>
			</section>
			<Separator className="mx-auto" />

			<section className="py-10">
				<div>
					<Heading className="my-10 mx-0">Product Reviews</Heading>
					<ReviewBar reviews={productReviews} />
				</div>
				<div className="w-full flex items-center justify-center"></div>
				<div className="flex flex-col sm:flex-row items-start justify-start gap-5">
					<ReviewForm userId={userId} productId={productId} />
					<ReviewList productId={productId} />
				</div>
			</section>
		</MaxWidthWrapper>
	);
};

export default Page;
