module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        '@hh.ru/eslint-config',
        //"prettier",
        // 'eslint:recommended',
        // 'plugin:@typescript-eslint/recommended',
        // 'plugin:react-hooks/recommended',
    ],
    overrides: [
        {
            files: './src*.{ts,tsx}',
            extends: '@hh.ru/eslint-config/typescript',
        },
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
    },
};
