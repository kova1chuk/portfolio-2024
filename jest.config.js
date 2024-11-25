const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1", // Adjust path alias for App Router
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

module.exports = customJestConfig;
