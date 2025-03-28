import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { UserButton } from "@clerk/nextjs";

type Props = {
	children: React.ReactNode;
};
const Layout = async ({ children }: Props) => {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="w-full">
				<header className="flex justify-between items-center w-full py-4 px-4 bg-white border-b shadow border-gray-300 sticky top-0 z-[10]">
					<nav className="invisible">
						<p className="text-xl font-semibold sm:text-2xl">
							Attar Malaki Dashboard
						</p>
					</nav>
					<div className="flex gap-1">
						<div className="flex items-center size-8">
							<UserButton />
						</div>
						<SidebarTrigger className=" size-8 cursor-pointer bg-neutral-200 rounded-full" />
					</div>
				</header>

				{children}
			</main>
		</SidebarProvider>
	);
};
export default Layout;
