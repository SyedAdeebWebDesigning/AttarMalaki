// @ts-nocheck

import UpdateAddressForm from "@/components/shared/UpdateAddressForm";

interface PageProps {
	params?: {
		id?: string;
	};
}

// @ts-expect-error
const Page = ({ params }: PageProps) => {
	// Ensure id exists, otherwise throw an error or handle it gracefully
	if (!params?.id) {
		return <div>Error: Address ID is missing.</div>;
	}

	return <UpdateAddressForm id={params.id} />;
};

export default Page;
