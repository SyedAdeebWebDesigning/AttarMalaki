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
			<div className="px-4">
				<h1 className="mt-10 font-medium text-3xl">Your Address</h1>
				<div className="">
					<div className="my-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{address.success &&
							address.addresses?.map((address) => {
								return (
									<div
										key={address.id}
										className="bg-neutral-100 rounded-xl shadow-md">
										<div className="px-4 py-3 flex ">
											<div className="mr-3">
												{address.label.toLowerCase() === "home" ? (
													<AiOutlineHome className=" size-10 p-[7px] aspect-square  bg-white rounded-xl" />
												) : (
													<GrLocation className=" size-10 p-[7px] aspect-square  bg-white rounded-xl" />
												)}
											</div>
											<div className="flex flex-col">
												<h3 className="text-xl font-medium ">
													<p className="mr-1">{address.label}</p>
												</h3>
												<h3 className="text-sm line-clamp-2">
													{`${user?.firstName} ${user?.lastName}, ${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.zipCode}`}
												</h3>
												<div className="mt-3">
													<Link href={`/address?type=add`}>
														<TooltipProvider>
															<Tooltip>
																<TooltipTrigger asChild>
																	<Button
																		variant={"outline"}
																		size={"icon"}
																		className="rounded-full size-8 cursor-pointer">
																		<GoPlus />
																	</Button>
																</TooltipTrigger>
																<TooltipContent>
																	<p>Add Address</p>
																</TooltipContent>
															</Tooltip>
														</TooltipProvider>
													</Link>
													<Link href={`/address/${address.id}`}>
														<TooltipProvider>
															<Tooltip>
																<TooltipTrigger asChild>
																	<Button
																		variant={"outline"}
																		size={"icon"}
																		className="rounded-full size-8 cursor-pointer ml-2">
																		<GoKebabHorizontal />
																	</Button>
																</TooltipTrigger>
																<TooltipContent>
																	<p>Edit Address</p>
																</TooltipContent>
															</Tooltip>
														</TooltipProvider>
													</Link>
													<TooltipProvider>
														<Tooltip>
															<TooltipTrigger asChild>
																<DeleteAddressButton
																	id={address.id}
																	userId={user?.id as string}
																/>
															</TooltipTrigger>
															<TooltipContent>
																<p>Delete Address</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
		</MaxWidthWrapper>
	);
};

export default page;
