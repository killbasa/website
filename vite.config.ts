import { resolve } from 'node:path';
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			preprocess: vitePreprocess(),
			compilerOptions: {
				runes: true,
				experimental: {
					async: true,
				},
			},
			adapter: adapter(),
			experimental: {
				remoteFunctions: true,
			},
			alias: {
				$components: resolve('./src/components'),
				$src: resolve('./src'),
			},
			output: {
				bundleStrategy: 'inline',
			},
		}),
	],
	server: {
		port: 4000,
	},
	preview: {
		port: 4000,
	},
});
