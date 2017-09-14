module.exports = {
   'env': {
      'browser': true,
      'commonjs': true,
      'es6': true,
      'node': true,
      'mocha': true
   },
   'extends': [
      'eslint:recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:react/recommended'
   ],
   'parserOptions': {
      'ecmaFeatures': {
         'experimentalObjectRestSpread': true,
         'jsx': true
      },
      'sourceType': 'module'
   },
   'plugins': [
      'react'
   ],
   'rules': {
      'quotes': 0,
      'semi': [1, 'always'],
      'no-unused-vars': 1,
      'react/prop-types': 1
   },
   'settings': {
      'import/resolver': {
         'node': {
            'paths': [
               'client',
               'node_modules',
               'server'
            ]
         }
      }
   }
};

