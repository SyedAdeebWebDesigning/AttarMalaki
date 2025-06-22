"use client";

import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const PaymentInfoCard = ({
	cardLast4,
	cardHolderName,
	cardExpiry,
	cardBrand,
}: {
	cardLast4: string;
	cardHolderName: string;
	cardExpiry: string;
	cardBrand: string;
	className?: string;
}) => {
	return (
		<div>
			<Cards
				number={`**** **** **** ${cardLast4}`}
				name={cardHolderName}
				expiry={cardExpiry}
				cvc={"***"}
				issuer={cardBrand?.toLowerCase()}
				locale={{ valid: "Valid Thru" }}
				placeholders={{ name: "Card Holder Name" }}
				preview={true}
			/>
		</div>
	);
};

export default PaymentInfoCard;
