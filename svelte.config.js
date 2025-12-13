import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		runes: true,
		experimental: {
			async: true
		}
	},
	kit: {
		adapter: adapter(),
		experimental: {
			remoteFunctions: true
		},
		alias: {
			$components: resolve('./src/components'),
			$src: resolve('./src')
		},
		output: {
			preloadStrategy: 'modulepreload',
			bundleStrategy: 'inline'
		}
	}
};

export default config;
