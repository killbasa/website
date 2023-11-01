module.exports = {
	root: true,
	extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.eslint.json',
		ecmaVersion: 2020,
		sourceType: 'module',
		warnOnUnsupportedTypeScriptVersion: false
	},
	env: {
		browser: true,
		es6: true,
		node: true
	},
	rules: {}
};
