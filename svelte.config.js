import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		alias: {
			$components: resolve('./src/components')
		},
		output: {
			preloadStrategy: 'modulepreload',
			bundleStrategy: 'single'
		}
	}
};

export default config;
