module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/tests/setup.js'],  
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^.+\\.(jpg|jpeg|gif|png|mp4|mkv|avi|webm|swf|wav|mid)$': 'jest-static-stubs/$1'
  },
  globals: {
    __DEV__: true
  },
  collectCoverageFrom: [
    '**/tests/**/*.{js,jsx}',
    '!**/src/**/style.js',
    '!**/src/**/index.js',
    '!**/src/theme/**',
    '!**/android/**',
    '!**/ios/**',
    '!**/node_modules/**',
    '!**/scripts/**',
    '!**/__test__/**'
  ],
  verbose: true,
  testPathIgnorePatterns: [
    '/node_modules/',
    '/ios/',
    '/android/'
  ]
}