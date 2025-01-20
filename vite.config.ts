import { resolve } from 'path';
import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [reactRouter()],
	resolve: {
		alias: {
			'@components': resolve(__dirname, 'app/components'),
			'@utils': resolve(__dirname, 'app/utils'),
			'@hooks': resolve(__dirname, 'app/hooks'),
			'@services': resolve(__dirname, 'app/services'),
			'@pages': resolve(__dirname, 'app/pages'),
			'~types': resolve(__dirname, 'app/types'),
			'~app': resolve(__dirname, 'app/'),
		},
	},
});
