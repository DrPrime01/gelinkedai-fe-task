/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#F5F3FF",
					200: "#E6E0FF",
					300: "#675E8B",
					500: "#755AE2",
				},
				gray: {
					200: "#8C8CA1",
					500: "#4A4A68",
				},
				warning: "#FF5F56",
			},
		},
	},
	plugins: [],
};
