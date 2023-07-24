export default {
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy",
  },
  testEnvironment: "jsdom",
  transform: {
    "\\.(js|jsx)$": "babel-jest",
  },
};
