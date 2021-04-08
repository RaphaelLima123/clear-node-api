module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverage: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'node',
  transform: { '.+\\.ts$': 'ts-jest' }
}
