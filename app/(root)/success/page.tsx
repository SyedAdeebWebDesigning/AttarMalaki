import SuccessPage from "@/components/shared/SuccessPage";

interface pageProps {}

const page = async ({}: pageProps) => {
	return (
		<div>
			<SuccessPage />
		</div>
	);
};

export default page;
