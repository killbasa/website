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
			adapter: adapter(),
			compilerOptions: {
				modernAst: true,
				runes: true,
				experimental: {
					async: true,
				},
			},
			experimental: {
				remoteFunctions: true,
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
