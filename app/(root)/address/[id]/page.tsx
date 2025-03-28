import UpdateAddressForm from "@/components/shared/UpdateAddressForm";

interface PageProps {
	params: {
		id: any;
	};
}

const Page = ({ params }: PageProps) => {
	return <UpdateAddressForm id={params.id} />;
};

export default Page;
