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
	visa: "bg-gradient-to-r from-[#3192d1] to-[#3192d1]",
	mastercard:
		"bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700",
	amex: "bg-gradient-to-r from-teal-500 to-cyan-600",
	default: "bg-gradient-to-r from-gray-500 to-gray-700",
};

const cardImages = {
	visa: "/cards/visa.webp",
	mastercard: "/cards/mastercard.webp",
	amex: "/cards/amex.webp",
};

const logoIcons = {
	visa: <RiVisaLine size={100} className="object-cover" />,
	mastercard: <RiMastercardFill size={100} />,
	amex: <GrAmex size={100} className="text-black" />,
	default: <FaRegCreditCard size={60} />,
};

const PaymentCard = ({ number, expire, name, type }: PaymentCardProps) => {
	const formattedNumber = number.replace(/\d{4}(?=.)/g, "$& ");
	const bgClass = cardStyles[type] || cardStyles.default;
	const Logo = logoIcons[type] || logoIcons.default;

	return (
		<div
			className={clsx(
				"w-full h-64 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex flex-col justify-between backdrop-blur-2xl",
				bgClass,
				type === "amex"
					? "text-black text-shadow-white"
					: "text-white text-shadow-black"
			)}
			style={{
				backgroundImage: type === "default" ? "" : `url(${cardImages[type]})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}>
			{/* Top Row: SIM & Logo */}
			<div className="flex justify-between items-center">
				<div className="w-[5rem] h-[3.5rem] bg-gradient-to-br from-yellow-300 to-yellow-600 rounded-sm shadow-inner border border-yellow-700 relative overflow-hidden">
					<div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px] p-[2px]">
						<div className="bg-yellow-100/50 rounded-sm" />
						<div className="bg-yellow-100/50 rounded-sm" />
						<div className="bg-yellow-100/50 rounded-sm" />
						<div className="bg-yellow-100/50 rounded-sm" />
					</div>
				</div>

				<div>{Logo}</div>
			</div>

			{/* Card Number */}
			<div className="font-credit text-[1.8rem] tracking-[8.8px] font-semibold">
				{formattedNumber}
			</div>

			{/* Card Footer */}
			<div className="flex justify-between items-end text-lg font-credit">
				<div>
					<p>{name}</p>
				</div>
				<div>
					<p className="mr-[12px]">{expire}</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentCard;
