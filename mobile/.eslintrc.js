module.exports = {
  root: true,
  extends: '@react-native',
  "eslint.workingDirectories": [
    { directory: "./client/", changeProcessCWD: true },
    { directory: "./server/", changeProcessCWD: true },
  ],
};
