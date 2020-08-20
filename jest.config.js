/** @format */

module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': `<rootDir>/test/preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/test/loadershim.js`],
  setupFilesAfterEnv: [`<rootDir>/test/setup.js`],
}
