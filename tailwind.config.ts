import type { Config } from "tailwindcss";

export default {
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	prefix: "",
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Instrument Sans"', 'system-ui', 'sans-serif'],
				display: ['Anton', 'Impact', 'sans-serif'],
			},
			colors: {
				ink: { DEFAULT: '#141414', soft: '#55524D', faint: '#8A867F' },
				line: '#E3E1DB',
				paper: '#EFEEEA',
				mist: '#E6E4DE',
				blue: { DEFAULT: '#3F3CF0', deep: '#2E2BC9' },
				orange: { DEFAULT: '#FF6A2B', deep: '#E9561A' },
				yellow: { DEFAULT: '#FFD43D', deep: '#F5C518' },
			},
			keyframes: {
				marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
				spin: { to: { transform: 'rotate(360deg)' } },
			},
			animation: {
				marquee: 'marquee 38s linear infinite',
				'spin-slow': 'spin 22s linear infinite',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
