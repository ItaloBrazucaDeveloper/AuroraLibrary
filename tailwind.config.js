/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: [
		'ring-rose-500',
		'ring-violet-500',
		'ring-yellow-500',
		'ring-lime-500',
		'ring-sky-500',
		'ring-zinc-500',
		'ring-emerald-500',
		'bg-rose-200',
		'bg-violet-200',
		'bg-yellow-200',
		'bg-lime-200',
		'bg-sky-200',
		'bg-zinc-200',
		'bg-emerald-200',
	],
};
