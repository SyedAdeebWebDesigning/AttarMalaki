import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CgMenuRight } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import { FaHome, FaInfoCircle, FaBoxes } from "react-icons/fa";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";
import { TbPerfume } from "react-icons/tb";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Navbar links with icons
const navLinks = [
	{
		name: "Home",
		href: "/",
		icon: <AiOutlineHome className="mr-1.5 text-2xl size-6" />,
		hasSpanText: false,
	},
	{
		name: "About",
		href: "/about",
		icon: <AiOutlineInfoCircle className="mr-1.5 text-2xl size-6" />,
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
	}, // Cart added in navLinks
];

const NavBar = () => {
	return (
		<header className="py-4 bg-white border-b shadow-md border-gray-300 sticky top-0 w-full z-[999]">
			<MaxWidthWrapper>
				<div className="flex items-center justify-between">
					{/* Logo */}
					<Image
						src="/logo/LogoBlack.svg"
						alt="Attar Malaki Logo"
						width={250}
						height={100}
						priority
						className="object-contain"
					/>

					{/* Desktop Navigation */}
					<nav>
						<ul className="hidden sm:flex text-xl space-x-8">
							{navLinks.map((link, index) => (
								<li key={index} className="relative group flex items-center">
									<Link
										href={link.href}
										className={cn("hover:text-gray-700 flex items-center")}>
										{link.icon} {link.name}
										{link.hasSpanText && (
											<span className=" top-1 -right-6 shadow-2xl rounded-full size-6 text-black flex items-center justify-center">
												4
											</span>
										)}
									</Link>
									{/* Underline animation */}
									<span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-2/3"></span>
								</li>
							))}
						</ul>

						{/* Mobile Navigation - Hamburger Menu */}
						<Sheet>
							<SheetTrigger className="sm:hidden">
								<CgMenuRight className="text-2xl size-8" />
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
