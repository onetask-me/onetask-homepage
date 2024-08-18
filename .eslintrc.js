module.exports = {
  plugins: ['prettier', 'import', '@typescript-eslint'],
  extends: ['prettier', 'next/core-web-vitals'],
  rules: {
    'no-return-await': 'warn',
    'react/jsx-curly-brace-presence': [
      1,
      {
        props: 'never',
        children: 'ignore',
      },
    ],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    'react/no-unescaped-entities': 0,
    'react-hooks/exhaustive-deps': 0,
    'no-duplicate-selectors': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'sibling',
          'parent',
        ],
      },
    ],
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.jsx', '.tsx', '.mdx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.mdx'],
    },
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
};
