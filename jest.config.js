module.exports = {
  roots: ['<rootDir>', '<rootDir>/src', './src', './src/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  moduleDirectories: ['node_modules', 'src'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '\\.graphql$': ['graphql-let/jestTransformer', { subsequentTransformer: 'babel-jest' }],
  },
  // collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  setupFiles: ['<rootDir>/jest/setup.js'],
};
