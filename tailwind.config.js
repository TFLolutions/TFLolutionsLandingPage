/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			"2xl": "1535px",
			xl: "1279px",
			lg: "1023px",
			sm: "639px",
			md: "767px",
		  },
		extend: {},
	},
	plugins: [],
}
