"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import { Button } from "../ui/button";
import { GoKebabHorizontal, GoPlus } from "react-icons/go";
import DeleteAddressButton from "./DeleteAddressButton";
import { Building2 } from "lucide-react";
import { toast } from "react-toastify";
import { makeSelectedAddress } from "@/lib/actions/address.action";
import { useRouter } from "next/navigation";

const AddressComponent = ({ address, user }) => {
	const router = useRouter();
	const handleAddressClick = async () => {
		if (address.isSelected) return;
		try {
			await makeSelectedAddress(address.id, user.id);
			toast.success("Address selected successfully!");
			router.refresh();
		} catch (error) {
			toast.error("Error selecting address:");
		}
	};
	return (
		<div
			onClick={handleAddressClick}
			className={cn(
				"bg-white rounded-xl shadow-md hover:scale-[102%] transition-all relative duration-300 cursor-pointer",
				address.isSelected ? "border-2 border-[#ffb6b6]" : ""
			)}>
			{address.isSelected && (
				<div className="absolute -right-0.5 -top-0.5 py-1 rounded-tr-xl px-4 bg-[#ffb6b6]">
					<span className="text-black text-sm font-semibold">Selected</span>
				</div>
			)}
			<div className="px-4 py-3 flex ">
				<div className="mr-3">
					{address.label.toLowerCase() === "home" ? (
						<AiOutlineHome className=" size-10 p-[7px] aspect-square  bg-white rounded-xl" />
					) : address.label.toLowerCase() === "work" ? (
						<Building2 className=" size-10 p-[7px] aspect-square  bg-white rounded-xl" />
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
										isSelected={address.isSelected}
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
};

export default AddressComponent;
