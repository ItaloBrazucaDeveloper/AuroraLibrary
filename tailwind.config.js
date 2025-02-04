/** @type {import('tailwindcss').Config} */
export default {
	content: ['./app/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			keyframes: {
				pop: {
					'from': { transform: 'scale(0)' },
					'to': { transform: 'scale(1)' },
				},
			},
			animation: {
				appear: 'pop 0.5s ease',
				dissapear: 'pop 0.5s reverse ease',
			},
			fontFamily: {
				'lexend-deca': ['Lexend Deca', 'serif'],
			}
		},
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
