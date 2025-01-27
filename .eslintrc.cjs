module.exports = {
    'env': {
        'es6': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:node/recommended',
        'plugin:security/recommended',
        'plugin:import/recommended',
        /*'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',*/
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly'
    },
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'project': 'tsconfig.json'
    },
    'plugins': ['@typescript-eslint'],
    'rules': {
        'node/no-deprecated-api': 'warn',
        'node/no-unsupported-features/es-syntax': 'warn',
        'no-process-exit': 'warn',
        'no-useless-escape': 'warn',
    },
    'overrides': [
        {
            'files': ['*.js', '*.jsx'],
            'rules': {
                'no-var': 'off',
                'prefer-spread': 'off',
                // https://github.com/eslint-community/eslint-plugin-security/issues/21
                'security/detect-object-injection': 'off',
                // these warnings should be fix later
                '@typescript-eslint/no-empty-function' : 'off',
                '@typescript-eslint/no-require-imports' : 'off',
                '@typescript-eslint/no-this-alias': 'off',
                '@typescript-eslint/no-unsafe-call': 'off',
                '@typescript-eslint/no-unsafe-assignment': 'off',
                '@typescript-eslint/no-unsafe-member-access': 'off',
                '@typescript-eslint/no-unsafe-return': 'off',
                '@typescript-eslint/no-use-before-define' : 'off',
                '@typescript-eslint/no-var-requires' : 'off',
                '@typescript-eslint/restrict-plus-operands': 'off',
                '@typescript-eslint/restrict-template-expressions': 'off',
                '@typescript-eslint/unbound-method' : 'off',
                'import/newline-after-import' : 'warn',
                'import/order' : 'warn',
                'node/exports-style' : 'warn',
                'no-mixed-requires' : 'warn',
                'space-before-function-paren' : ['warn', {
                    "anonymous": "always",
                    "named": "never",
                    "asyncArrow": "always"
                }],
                'no-unused-vars': ['error', { 'argsIgnorePattern': 'next' }],
            }
        }
    ]
};
