import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";

interface pageProps {}

const page = ({}: pageProps) => {
	return (
		<MaxWidthWrapper>
			<div>
				<h1 className="mt-10 font-semibold text-3xl">Your Address</h1>
			</div>
		</MaxWidthWrapper>
	);
};

export default page;
