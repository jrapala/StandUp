module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'prettier/react',
		'plugin:react/recommended',
		'plugin:react-native/all',
		'plugin:jsx-a11y/strict',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:jest/recommended',
		'@react-native-community',
	],
	plugins: [
		'react',
		'import',
		'jsx-a11y',
		'react-hooks',
		'detox',
		'better-styled-components',
	],
	rules: {
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		semi: 0,
		'react-native/sort-styles': 'warn',
		'jest/no-jasmine-globals': 0,
		'react-native/no-raw-text': 0,
		'sort-keys': ['warn', 'asc', { caseSensitive: false, natural: true }],
		'better-styled-components/sort-declarations-alphabetically': 1,
		'import/no-named-as-default-member': 0,
	},
	env: {
		jest: true,
		'detox/detox': true,
		'react-native/react-native': true,
	},
	settings: {
		react: {
			version: 'detect',
		},
		'import/ignore': ['react-navigation', 'react-native-linear-gradient'],
	},
}
