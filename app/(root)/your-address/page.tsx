import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { getAddress } from "@/lib/actions/address.action";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { currentUser } from "@clerk/nextjs/server";
import { AiOutlineHome } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { GoKebabHorizontal } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { GoPlus } from "react-icons/go";
import Link from "next/link";
import DeleteAddressButton from "@/components/shared/DeleteAddressButton";
import { cn } from "@/lib/utils";
import AddressComponent from "@/components/shared/AddressComponent";
interface pageProps {}

const page = async ({}: pageProps) => {
	const _ = await currentUser();
	const user = await getUserByClerkId(_?.id!);
	const address = await getAddress(user?.id || "");

	if (!address.success) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<p>No address found!</p>
			</div>
		);
	}
	return (
		<MaxWidthWrapper>
			<div className="px-4 py-20">
				<h1 className="mt-10 font-medium text-3xl">Your Address</h1>
				<div className="">
					<div className="my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{address.success &&
							address.addresses?.map((address) => {
								return (
									<AddressComponent
										user={user}
										address={address}
										key={address.id}
									/>
								);
							})}
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default page;
