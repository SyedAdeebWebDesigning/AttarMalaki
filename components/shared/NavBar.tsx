import Image from "next/image";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CgMenuRight } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

// Navbar links
const navLinks = [
	{ name: "Home", href: "/" },
	{ name: "About", href: "/about" },
	{ name: "Products", href: "/products" },
];

const NavBar = () => {
	return (
		<header className="py-4 bg-white border-b border-gray-300">
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
								<li key={index} className="relative group">
									<a href={link.href} className="hover:text-gray-700">
										{link.name}
									</a>
									{/* Underline animation */}
									<span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-1/2"></span>
								</li>
							))}
							{/* Cart */}
							<li className="flex items-center cursor-pointer">
								<IoBagOutline className="mr-1.5 text-2xl" />
								Cart
							</li>
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
											<li key={index}>
												<a href={link.href} className="hover:text-gray-700">
													{link.name}
												</a>
											</li>
										))}
										{/* Cart */}
										<li className="flex items-center cursor-pointer">
											<IoBagOutline className="mr-1.5 text-2xl" />
											Cart
										</li>
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
