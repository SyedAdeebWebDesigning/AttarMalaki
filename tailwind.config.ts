const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	darkMode: "class", // Ensure dark mode is enabled properly
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: "hsl(var(--primary))",
				"primary-foreground": "hsl(var(--primary-foreground))",
				secondary: "hsl(var(--secondary))",
				"secondary-foreground": "hsl(var(--secondary-foreground))",
				muted: "hsl(var(--muted))",
				"muted-foreground": "hsl(var(--muted-foreground))",
				accent: "hsl(var(--accent))",
				"accent-foreground": "hsl(var(--accent-foreground))",
				destructive: "hsl(var(--destructive))",
				"destructive-foreground": "hsl(var(--destructive-foreground))",
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
				mono: ["var(--font-mono)", ...fontFamily.mono],
				credit: ['"VT323"', "monospace"],
			},
			borderRadius: {
				sm: "var(--radius-sm)",
				md: "var(--radius-md)",
				lg: "var(--radius-lg)",
				xl: "var(--radius-xl)",
			},
		},
	},
	plugins: [],
};
