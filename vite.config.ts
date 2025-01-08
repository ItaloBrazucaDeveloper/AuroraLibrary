import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': resolve(__dirname, 'src/components'),
			'@utils': resolve(__dirname, 'src/utils'),
			'@hooks': resolve(__dirname, 'src/hooks'),
			'@services': resolve(__dirname, 'src/services'),
			'@routes': resolve(__dirname, 'src/routes'),
		},
	},
	define: {
		'process.env.VITE_API_BASE_URL': JSON.stringify(
			process.env.VITE_API_BASE_URL,
		),
	},
});
