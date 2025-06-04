import ProductUpdateForm from "@/components/shared/productUpdateForm";
import { getProductById } from "@/lib/actions/products/products.action";
import { Product } from "@/typings";

interface pageProps {
	params: {
		id: string;
	};
}

const page = async ({ params }: pageProps) => {
	const product = (await getProductById(params.id)) as Product;

	return (
		<div>
			<ProductUpdateForm product={product} />
		</div>
	);
};

export default page;
