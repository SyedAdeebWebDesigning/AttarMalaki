"use client";

import Image from "next/image";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { IoBagOutline, IoHomeOutline } from "react-icons/io5";
import { BsBox2Fill } from "react-icons/bs";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { LucideLeaf, User } from "lucide-react";
import { cn } from "@/lib/utils";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import {
	useAuth,
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from "@clerk/nextjs";

const navLinks = [
	{
		name: "Home",
		href: "/",
		icon: <IoHomeOutline className="mr-1.5 text-2xl size-6" />,
		hasSpanText: false,
	},
	{
		name: "Products",
		href: "/products?page=1",
		icon: <LucideLeaf className="mr-1.5 text-2xl size-6" />,
		hasSpanText: false,
	},
	{
		name: "Bag",
		href: "/bag",
		icon: <IoBagOutline className="mr-1.5 text-2xl size-6" />,
		hasSpanText: true,
	},
];

const NavBarClient = ({ user }: { user: any }) => {
	const { isLoaded } = useAuth();

	if (!isLoaded) {
		return (
			<ul className="text-xl space-x-8 items-center justify-center flex">
				{Array(3)
					.fill(null)
					.map((_, i) => (
						<li
							key={i}
							className="h-6 w-20 bg-gray-200 animate-pulse rounded-md hidden min-[690px]:flex"
						/>
					))}
				<div className="size-8 rounded-full bg-gray-200 animate-pulse" />
			</ul>
		);
	}

	return (
		<nav className="flex flex-row-reverse">
			<SignedIn>
				<ul className="text-xl space-x-8 items-center justify-center flex">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className="relative group items-center hidden min-[690px]:flex">
							<Link
								href={link.href}
								className={cn("hover:text-gray-700 flex items-center")}>
								{link.icon} {link.name}
								{link.hasSpanText && (
									<span className="top-1 -right-6 shadow-2xl rounded-full size-6 text-black flex items-center justify-center">
										4
									</span>
								)}
							</Link>
							<span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-2/3"></span>
						</li>
					))}
					<li className="mt-2">
						<UserButton>
							<UserButton.MenuItems>
								{user && user.hasCompletedAddresses ? (
									<UserButton.Link
										label="Your Address"
										labelIcon={<FaLocationDot />}
										href="/your-address"
									/>
								) : (
									<UserButton.Link
										label="Add Address"
										labelIcon={<FaLocationDot />}
										href="/address"
									/>
								)}
								<UserButton.Link
									label="Your Orders"
									labelIcon={<BsBox2Fill />}
									href="/your-orders"
								/>
								{user && user.isAdmin && (
									<UserButton.Link
										label="Admin Dashboard"
										labelIcon={<TbLayoutDashboardFilled className="size-4" />}
										href="/dashboard"
									/>
								)}
							</UserButton.MenuItems>
						</UserButton>
					</li>
				</ul>
			</SignedIn>

			<SignedOut>
				<ul className="hidden min-[690px]:flex text-xl space-x-8 items-center justify-center">
					<li>
						<Link
							href={"/sign-in"}
							className="cursor-pointer relative group flex items-center">
							<User />
							<p className="ml-1">Sign In</p>
							<span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-2/3"></span>
						</Link>
					</li>
				</ul>
			</SignedOut>

			{/* Mobile Nav */}
			<Sheet>
				<SheetTrigger className="min-[690px]:hidden">
					<CgMenuRight className="text-2xl size-8 mr-2" />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>
							<Image
								src="/logo/LogoBlack.svg"
								alt="Attar Malaki Logo"
								width={200}
								height={100}
								priority
								className="object-contain"
							/>
						</SheetTitle>
						<SignedIn>
							<ul className="flex flex-col text-xl mt-10 space-y-3">
								{navLinks.map((link, index) => (
									<li key={index} className="flex items-center">
										<a
											href={link.href}
											className="hover:text-gray-700 flex items-center">
											{link.icon} {link.name}
										</a>
									</li>
								))}
							</ul>
						</SignedIn>
						<SignedOut>
							<ul className="flex flex-col text-xl mt-5 space-y-3">
								<li className="flex items-center">
									<User />
									<p className="ml-1">
										<SignInButton />
									</p>
								</li>
							</ul>
						</SignedOut>
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);
};

export default NavBarClient;
