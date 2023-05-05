const esbuild = require('esbuild');

const Modes = {
    dev: 'dev',
    watch: 'watch',
    release: 'release',
};

// argv: node bundle.js <argument>
let mode = process.argv.length > 2 ? process.argv[2] : null;
if (!mode) {
    console.log('Bundling for release.');
    mode = Modes.release;
}

if (!Object.values(Modes).includes(mode)) {
    throw Error(
        `Unsupported mode: '${mode}'. Please use one of: [${Object.values(Modes)}].`,
    );
}

// VSCode starts a watch task and waits for specific markers on the console to start the extensionHost with our extension.
// We use esbuild Problem Matcher which communicates with vscode for us. Therefore we need to print "[watch] XXX" messages
// on the console whenever we start the watcher or finish a re-build.
// Do not remove the console.log('[watch] ...') statements in the next lines and in 'onRebuild'.
function logWatchModeProblemMatcherMessage(message) {
    if (mode === Modes.watch) {
        console.log(`[watch] ${message}`);
    }
}

logWatchModeProblemMatcherMessage('build started');

/** @type {esbuild.WatchMode} */
const WatchMode = {
    onRebuild: (error, _result) => {
        logWatchModeProblemMatcherMessage('build started');
        if (error) {
            error.errors.forEach((error) =>
                console.error(
                    `> ${error.location.file}:${error.location.line}:${error.location.column}: error: ${error.text}`,
                ),
            );
        } else {
            logWatchModeProblemMatcherMessage('build finished');
        }
    },
};

/** @type {esbuild.BuildOptions} */
const commonOptions = {
    bundle: true,
    minify: mode === Modes.release ? true : undefined,
    sourcemap: [Modes.dev, Modes.watch].includes(mode) ? true : undefined,
    watch: mode === Modes.watch ? WatchMode : undefined,
};

const thenHandler = () => {
    logWatchModeProblemMatcherMessage('build finished');
};

const errorHandler = (onRejected) => {
    console.error(onRejected);
    process.exit(1);
};

// main extension source
esbuild
    .build({
        entryPoints: ['src/extension.ts'],
        platform: 'node',
        format: 'cjs',
        target: 'node12.8',
        external: ['vscode', 'keytar', 'fsevents'], // provided by vscode
        outfile: 'out/extension.js',
        ...commonOptions,
    })
    .then(thenHandler)
    .catch(errorHandler);
