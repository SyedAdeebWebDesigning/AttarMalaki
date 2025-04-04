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
import { User, toggleAdmin } from "@/lib/actions/user.action";
import { useState } from "react";

interface UsersTableProps {
	users: User[];
}

const UsersTable = ({ users }: UsersTableProps) => {
	const [userList, setUserList] = useState(users);

	const handleToggleAdmin = async (id: string, isAdmin: boolean) => {
		// Optimistically update the UI
		setUserList((prevUsers) =>
			prevUsers.map((user) =>
				user.id === id ? { ...user, isAdmin: !isAdmin } : user
			)
		);
		// Perform the actual async action
		await toggleAdmin(id, isAdmin);
	};

	return (
		<Table>
			<TableCaption>A list of your users.</TableCaption>
			<TableHeader>
				<TableRow>
					<TableHead className="">#</TableHead>
					<TableHead>Name</TableHead>
					<TableHead>Email</TableHead>
					<TableHead className="">Address</TableHead>
					<TableHead className="text-right">Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{userList.map((user, index) => {
					const address =
						user.hasCompletedAddresses &&
						`${user.addresses[0].street} - ${user.addresses[0].city} - ${user.addresses[0].state} - ${user.addresses[0].country}`;

					return (
						<TableRow key={user.id}>
							<TableCell className="font-medium">{index + 1}</TableCell>
							<TableCell className="flex items-center justify-start">
								<Image
									src={user.imgUrl}
									width={40}
									height={40}
									className="rounded-full mr-1"
									alt=""
								/>
								{`${user.firstName} ${user.lastName}`}
							</TableCell>
							<TableCell>{user.email}</TableCell>
							<TableCell className="line-clamp-1">
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
	);
};

export default UsersTable;
