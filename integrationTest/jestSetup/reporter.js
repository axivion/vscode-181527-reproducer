// BAUHAUS-18940
// Jests overwrites the write property from a passed stream in 'DefaultReporter.__wrapStdio'.
// This is problematic in newer VSCode versions as this stream is now readonly.

// TypeError: Cannot assign to read only property 'write' of object '#<Socket>'
// at VerboseReporter.__wrapStdio (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/reporters/build/VerboseReporter.js:63:18)
// at new DefaultReporter (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/reporters/build/DefaultReporter.js:90:10)
// at new VerboseReporter (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/reporters/build/VerboseReporter.js:52:5)
// at TestScheduler._setupDefaultReporters (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/core/build/TestScheduler.js:455:11)
// at TestScheduler._setupReporters (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/core/build/TestScheduler.js:415:12)
// at createTestScheduler (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/core/build/TestScheduler.js:114:19)
// at runJest (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/core/build/runJest.js:397:66)
// at async _run10000 (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/core/build/cli/index.js:320:7)
// at async runCLI (<bauhaus>/projects/tools/vscodeplugin/node_modules/@jest/core/build/cli/index.js:173:3)

// We now include a noop reporter so the DefaultReporter from Jest is not created anymore.
// Our reporter does not need to do anything. The jest results are evaluated in 'integrationTest/suite/index.ts' to notify the vscode instance of any failures.
class Reporter {
    constructor(globalConfig, options) {
        this._globalConfig = globalConfig;
        this._options = options;
    }
}

module.exports = Reporter;
