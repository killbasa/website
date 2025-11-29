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
			$components: resolve('./src/components')
		},
		output: {
			preloadStrategy: 'modulepreload',
			bundleStrategy: 'inline'
		},
		csp: {
			directives: {
				'default-src': ['none'],
				'img-src': [
					'self',
					'https://imagedelivery.net',
					'https://avatars.githubusercontent.com'
				],
				'script-src': ['self'],
				'font-src': ['self'],
				'connect-src': ['self']
			}
		}
	}
};

export default config;
