/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/routes/**/*.{html,svelte,js,ts}',
		'./src/core/components/**/*.{html,svelte,js,ts}'
	],
	plugins: [require('daisyui')],
	theme: {
		extend: {}
	},
	daisyui: {
		styled: true,
		themes: ['pastel', 'dark'],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: '',
		darkTheme: 'dark'
	}
};
