"use client";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { User, toggleAdmin } from "@/lib/actions/user/user.action";
import { useState } from "react";

interface UsersTableProps {
	users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
	const [userList, setUserList] = useState(users);

	const handleToggleAdmin = async (id: string, isAdmin: boolean) => {
		setUserList((prevUsers) =>
			prevUsers.map((user) =>
				user.id === id ? { ...user, isAdmin: !isAdmin } : user
			)
		);
		await toggleAdmin(id, isAdmin);
	};

	return (
		<div className="w-full overflow-x-auto">
			<Table className="min-w-[600px]">
				<TableCaption>A list of your users.</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead>#</TableHead>
						<TableHead>Name</TableHead>
						<TableHead>Email</TableHead>
						<TableHead>Address</TableHead>
						<TableHead className="text-right">Status</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{userList.map((user, index) => {
						const address =
							user.hasCompletedAddresses &&
							`${user.addresses[0].street}, ${user.addresses[0].city}, ${user.addresses[0].state}, ${user.addresses[0].country}`;

						return (
							<TableRow key={user.id}>
								<TableCell className="font-medium">{index + 1}</TableCell>
								<TableCell className="flex items-center gap-2">
									<Image
										src={user.imgUrl}
										width={36}
										height={36}
										className="rounded-full object-cover"
										alt={`${user.firstName} ${user.lastName}`}
									/>
									<span className="text-sm font-medium">{`${user.firstName} ${user.lastName}`}</span>
								</TableCell>
								<TableCell className="text-sm text-left">
									{user.email}
								</TableCell>
								<TableCell className="text-sm max-w-[200px] truncate">
									{user.hasCompletedAddresses ? address : "No Address"}
								</TableCell>
								<TableCell
									className="text-right cursor-pointer"
									onClick={() => handleToggleAdmin(user.id, user.isAdmin)}>
									{user.isAdmin ? (
										<p className="text-sm text-green-700">Admin</p>
									) : (
										<p className="text-sm text-gray-500">User</p>
									)}
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</div>
	);
};

export default UsersTable;
