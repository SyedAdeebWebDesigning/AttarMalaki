import React from "react";

export default function Head() {
	return (
		<>
			<title>Your Site Title</title>
			<meta name="description" content="Your site description here" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="icon" href="/favicon.ico" />
			<style>
				{`@import
							url('https://fonts.googleapis.com/css2?family=Amita:wght@400;700&display=swap');
							.logoText {
								font-family: 'Amita', cursive;
							}`}
			</style>

			{/* Import Amita font from Google Fonts */}
			<link
				href="https://fonts.googleapis.com/css2?family=Amita:wght@400;700&display=swap"
				rel="stylesheet"
			/>
		</>
	);
}
