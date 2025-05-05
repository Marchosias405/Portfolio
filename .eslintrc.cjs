/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  // … your existing config …
  rules: {
    // turn off prop-types checking
    'react/prop-types': 'off',
    // you’re on React 17+, no need to import React in every file
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // three‑fiber uses JSX props that ESLint doesn’t recognize
    'react/no-unknown-property': 'off',

    // these warnings are safe to ignore for now
    'react-refresh/only-export-components': 'off',
  },

  // if you want it to apply only to .jsx/.tsx:
  overrides: [
    {
      files: ['src/**/*.{js,jsx,ts,tsx}'],
      rules: {
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/no-unknown-property': 'off',
        'react-refresh/only-export-components': 'off',
      },
    },
  ],
};
