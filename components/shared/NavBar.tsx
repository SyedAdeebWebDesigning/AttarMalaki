import MaxWidthWrapper from "./MaxWidthWrapper";

import Logo from "./Logo";
import NavBarClient from "./NavbarClient";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import { user } from "@/typings";

interface NavBarProps {
	user: any; // Replace with your actual user type if available
}

const NavBar = async () => {
	const clerkUser = await currentUser();
	const user = (await getUserByClerkId(clerkUser?.id ?? "")) as user;
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
