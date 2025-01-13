import { resolve } from 'path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [reactRouter()],
	resolve: {
		alias: {
			'@components': resolve(__dirname, 'src/components'),
			'@utils': resolve(__dirname, 'src/utils'),
			'@hooks': resolve(__dirname, 'src/hooks'),
			'@services': resolve(__dirname, 'src/services'),
			'@pages': resolve(__dirname, 'src/pages'),
		},
	},
	server: {
		proxy: {
			'/lib_api': {
				target: 'http//localhost:8000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/lib_api/, ''),
			},
		}
	},
});
