/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				source: ['Source Sans 3', 'sans-serif']
			},
			colors: {
				'soft-white': '#f5f5f5'
			}
		}
	},
	plugins: [],
	safelist: ['bg-slate-700', 'bg-slate-800']
};
