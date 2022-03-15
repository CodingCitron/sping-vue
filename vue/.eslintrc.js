module.exports = {
    root: true,
    env: {
        browser: true,
        amd: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: [
        'plugin:vue/essential',
        'prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['vue', 'prettier'],
    rules: {
        'vue/no-unused-components': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-model-argument': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/valid-template-root': 'off',
        'generator-star-spacing': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                semi: false,
                useTabs: false,
                tabWidth: 4,
                trailingComma: 'all',
                printWidth: 80,
                bracketSpacing: true,
                arrowParens: 'avoid',
                endOfLine: 'auto',
            },
        ],
        //'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
}
