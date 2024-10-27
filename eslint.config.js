import eslintConfig from '@killbasa/eslint-config/svelte';

/**
 * @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigArray}
 */
const config = [
	...eslintConfig,
	{
		name: 'ignore',
		ignores: ['.svelte-kit/', 'dist/', 'node_modules/']
	}
	// {
	// 	files: ['**/*.ts', '**/*.svelte'],
	// 	rules: {
	// 		'import/no-duplicates': 'off',
	// 		'import/no-unresolved': ['error', { ignore: ['^\\$app/'] }],
	// 	},
	// },
];

export default config;
