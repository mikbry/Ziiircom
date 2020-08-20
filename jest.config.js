module.exports = {
  verbose: true,
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  moduleFileExtensions: ['js', 'json', 'jsx'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js', '!<rootDir>/node_modules/', '!<rootDir>/config/'],
};
