import cfg from './svelte.config.js';
import eslintConfig from '@killbasa/eslint-config/svelte';
import { defineConfig } from 'eslint/config';

const config = defineConfig(
	...eslintConfig(cfg),
	{
		name: 'ignore',
		ignores: ['.svelte-kit/', 'build/', 'node_modules/']
	},
	{
		files: ['**/*.svelte'],
		rules: {
			'import/no-duplicates': 'off',
			'import/no-unresolved': ['error', { ignore: ['^\\$app/', '^\\$env/'] }]
		}
	}
);

export default config;
