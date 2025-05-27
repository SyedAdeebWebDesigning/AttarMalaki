"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import dynamic from "next/dynamic";

import Logo from "./Logo";

const NavBarClient = dynamic(() => import("./NavbarClient"), { ssr: false });

interface NavBarProps {
	user: any; // Replace with your actual user type if available
}

const NavBar = ({ user }: NavBarProps) => {
	return (
		<header className="py-4 bg-white/50 shadow-md fixed w-full z-[90] px-4 backdrop-blur-3xl">
			<MaxWidthWrapper>
				<div className="flex items-center justify-between">
					{/* <Image
						src="/logo/LogoBlack.svg"
						alt="Attar Malaki Logo"
						width={250}
						height={100}
						priority
						className="object-contain object-left mr-2"
					/> */}
					<Logo isLink href="/" />
					<NavBarClient user={user} />
				</div>
			</MaxWidthWrapper>
		</header>
	);
};

export default NavBar;
