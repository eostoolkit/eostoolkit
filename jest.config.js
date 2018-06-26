const config = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/global-styles.js',
    '!app/*/*/Loadable.{js,jsx}',
  ],
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/internals/mocks/file.js',
    '\\.(css|scss)$': 'identity-obj-proxy', // http://facebook.github.io/jest/docs/en/webpack.html#mocking-css-modules
  },
  setupFiles: ['./jest.setup.js'],
  testMatch: ['**/tests/**/*.test.js'],
};

module.exports = config;
