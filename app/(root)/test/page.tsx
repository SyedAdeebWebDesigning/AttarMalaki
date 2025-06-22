"use client";

import React from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
const page = () => {
	return (
		<div className="p-20">
			<Cards
				number="**** **** **** 4242"
				name="Syed Adeeb"
				expiry="1224"
				cvc="123"
				preview={true}
				issuer="visa"
			/>
		</div>
	);
};

export default page;
