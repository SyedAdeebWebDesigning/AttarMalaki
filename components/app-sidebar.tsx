import { Home, ListOrdered, Package2, Users } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { user } from "@prisma/client";
import { currentUser } from "@clerk/nextjs/server";
import { getUserByClerkId } from "@/lib/actions/user/getUserByClerkId";
import UserAvatar from "./shared/UserAvatar";
import Link from "next/link";
import { FaFigma } from "react-icons/fa6";

// Menu items
const items = [
	{ title: "Home", url: "/", icon: Home },
	{ title: "Products", url: "/dashboard/products", icon: Package2 },
	{ title: "Orders", url: "/dashboard/orders", icon: ListOrdered },
	{ title: "Users", url: "/dashboard/users", icon: Users },
	{ title: "Figma", url: "/dashboard/figma", icon: FaFigma },
];

export async function AppSidebar() {
	const clerkUser = await currentUser();
	const user = (await getUserByClerkId(clerkUser?.id ?? "")) as user;

	return (
		<Sidebar className=" min-h-screen">
			<SidebarHeader className="py-4 px-6">
				<p className="text-xl font-semibold tracking-tighter sm:text-2xl">
					Attar Malaki Dashboard
				</p>
			</SidebarHeader>

			<SidebarContent className="mt-4">
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link
											href={item.url}
											className="flex items-center gap-3 p-3 rounded-md hover:bg-gray-700 transition-all">
											<item.icon className="size-5" />
											<span className="text-sm font-medium">{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			{/* Sidebar Footer - User Info */}
			<SidebarFooter className="mt-auto border-gray-600">
				<SidebarGroup>
					<SidebarGroupContent>
						<div className="flex items-center gap-3 rounded-md bg-neutral-100 p-4">
							<UserAvatar />
							<div>
								<h4 className="text-sm font-semibold text-black">
									{user.firstName} {user.lastName}
								</h4>
								<p className="text-xs text-gray-700">{user.email}</p>
							</div>
						</div>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarFooter>
		</Sidebar>
	);
}
