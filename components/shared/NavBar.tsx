"use client";

import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CgMenuRight } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { BsBox2Fill } from "react-icons/bs";
import { TbLayoutDashboardFilled, TbPerfume } from "react-icons/tb";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LayoutDashboard, User } from "lucide-react";
import {
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
	useAuth,
} from "@clerk/nextjs";
import { FaLocationDot } from "react-icons/fa6";
import { user } from "@prisma/client";
import { useEffect, useState } from "react";

const navLinks = [
	{
		name: "Home",
		href: "/",
		icon: <AiOutlineHome className="mr-1.5 text-2xl size-6" />,
		hasSpanText: false,
	},
	{
		name: "Store",
		href: "/store",
		icon: <TbPerfume className="mr-1.5 text-2xl size-6" />,
		hasSpanText: false,
	},
	{
		name: "Bag",
		href: "/bag",
		icon: <IoBagOutline className="mr-1.5 text-2xl size-6" />,
		hasSpanText: true,
	},
];

interface NavBarProps {
	user: user;
}

const NavBar = ({ user }: NavBarProps) => {
	const [hasMounted, setHasMounted] = useState(false);
	const { isLoaded } = useAuth();

	return (
		<header className="py-4 bg-white border-b shadow-md border-gray-300 sticky top-0 w-full z-[90] px-4">
			<MaxWidthWrapper>
				<div className="flex items-center justify-between">
					<Link href={"/"}>
						<Image
							src="/logo/LogoBlack.png"
							alt="Attar Malaki Logo"
							width={250}
							height={100}
							priority
							className="object-contain object-left mr-2"
						/>
					</Link>

					<nav className="flex flex-row-reverse">
						{/* SignedIn Skeleton Logic */}
						{!isLoaded ? (
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
						) : (
							<>
								<SignedIn>
									<ul className="text-xl space-x-8 items-center justify-center flex">
										{navLinks.map((link, index) => (
											<li
												key={index}
												className="relative group items-center hidden min-[690px]:flex">
												<Link
													href={link.href}
													className={cn(
														"hover:text-gray-700 flex items-center"
													)}>
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
															labelIcon={
																<TbLayoutDashboardFilled className="size-4" />
															}
															href="/dashboard"
														/>
													)}
												</UserButton.MenuItems>
											</UserButton>
										</li>
									</ul>
								</SignedIn>

								{/* SignedOut Skeleton */}
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
							</>
						)}

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
										<ul className="flex flex-col text-xl mt-5 space-y-3">
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
				</div>
			</MaxWidthWrapper>
		</header>
	);
};

export default NavBar;
