/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

// jest integration config must be top level
// jest cannot load the vscode module - https://github.com/microsoft/vscode-test/issues/37
// we provide the vscode module as a global for jest to pick it up and also export it as a module so import statements in tests work
module.exports = {
    moduleFileExtensions: ['js'],
    testMatch: ['**/integrationTest/**/*.it.js'],
    verbose: true,
    testEnvironment: path.join(
        __dirname,
        'integrationTest/jestSetup/vscode-environment.js',
    ),
    moduleNameMapper: {
        vscode: path.join(__dirname, 'integrationTest/jestSetup/vscode.js'),
    },
    reporters: [path.join(__dirname, 'integrationTest/jestSetup/reporter.js')],
};
