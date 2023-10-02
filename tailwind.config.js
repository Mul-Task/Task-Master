/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				primary: "#22A5EF",
				secondary: {
					100: "#fcfcfc",
					200: "#F5F4F4 ",
					300: "#F6F6F6",
					400: "#6F6F6F",
				},

				height: {
					128: "32rem",
				},

				minHeight: {
					128: "32rem",
				},
			},
		},
	},
	plugins: [],
};
