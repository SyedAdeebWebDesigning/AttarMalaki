import UpdateAddressForm from "@/components/shared/UpdateAddressForm";

interface PageProps {
	params?: {
		id?: string;
	};
}

const Page = ({ params }: PageProps) => {
	// Ensure id exists, otherwise throw an error or handle it gracefully
	if (!params?.id) {
		return <div>Error: Address ID is missing.</div>;
	}

	return <UpdateAddressForm id={params.id} />;
};

export default Page;
