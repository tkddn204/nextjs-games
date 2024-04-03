import nextJest from 'next/jest.js';

const jestConfig = nextJest({
    dir: './'
});

export default jestConfig({
    testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules'],
    setupFilesAfterEnv: ['./jest.setup.mjs'],
    testEnvironment: 'jest-environment-jsdom',
})