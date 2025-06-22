"use client";
import React from "react";
import clsx from "clsx";
import { FaRegCreditCard } from "react-icons/fa";
import { RiVisaLine, RiMastercardFill } from "react-icons/ri";
import { GrAmex } from "react-icons/gr";
interface PaymentCardProps {
	number: string;
	expire: string;
	name: string;
	type: "visa" | "mastercard" | "amex" | "default";
}

const cardStyles = {
	visa: "bg-gradient-to-r from-blue-600 to-blue-800",
	mastercard:
		"bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700",
	amex: "bg-gradient-to-r from-teal-500 to-cyan-600",
	default: "bg-gradient-to-r from-gray-500 to-gray-700",
};

const logoIcons = {
	visa: <RiVisaLine size={70} className="object-cover" />,
	mastercard: <RiMastercardFill size={70} />,
	amex: <GrAmex size={70} />,
	default: <FaRegCreditCard size={70} />,
};

const PaymentCard = ({ number, expire, name, type }: PaymentCardProps) => {
	const formattedNumber = number.replace(/\d{4}(?=.)/g, "$& ");
	const bgClass = cardStyles[type] || cardStyles.default;
	const Logo = logoIcons[type] || logoIcons.default;

	return (
		<div
			className={clsx(
				"w-full h-64 rounded-2xl p-5 shadow-lg text-white relative overflow-hidden flex flex-col justify-between",
				bgClass
			)}>
			{/* Top Row: SIM & Logo */}
			<div className="flex justify-between items-center">
				<div className="w-[4rem] h-[2.5rem] bg-yellow-400 rounded-sm shadow-inner" />
				<div>{Logo}</div>
			</div>

			{/* Card Number */}
			<div className="font-mono text-[1.5rem] min-[771px]:text-[1rem] sm:text-[1.8rem] tracking-widest">
				{formattedNumber}
			</div>

			{/* Card Footer */}
			<div className="flex justify-between items-end text-sm font-medium">
				<div>
					<p className="text-gray-200 text-lg">Card Holder</p>
					<p className="text-gray-200 text-lg">{name}</p>
				</div>
				<div>
					<p className="text-gray-200 text-lg">Valid Thru</p>
					<p className="text-gray-200 text-lg">{expire}</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentCard;
