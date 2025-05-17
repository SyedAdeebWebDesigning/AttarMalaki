import Heading from "@/components/shared/Heading";
import ProductForm from "@/components/shared/ProductForm";

interface pageProps {}

const page = ({}: pageProps) => {
	return (
		<div>
			<Heading>Add Product</Heading>
			<ProductForm />
		</div>
	);
};

export default page;
