module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  setupFiles: ["./tests/jest-setup.js"],
  transformIgnorePatterns: [
    "node_modules/(?!(vuetify)/)" // don't ignore vuetify
  ]
};
