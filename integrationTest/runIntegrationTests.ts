import * as path from 'path';
import * as os from 'os';

import { runTests } from '@vscode/test-electron';

const userDataDirRoot = path.join(os.tmpdir(), 'vscodeplugin-it');

async function main() {
    try {
        // The folder containing the Extension Manifest package.json
        // Passed to `--extensionDevelopmentPath`
        // Starting from out/integrationTest/runIntegrationTests.js
        const extensionDevelopmentPath = path.resolve(__dirname, '../..');

        // The path to the extension test runner script
        // Passed to --extensionTestsPath
        const extensionTestsPath = path.resolve(__dirname, './suite/index');

        const commonOptions = {
            launchArgs: ['--disable-extensions'], // disable all other extensions
            extensionDevelopmentPath,
            extensionTestsPath,
        };

        // Download VS Code, unzip it and run the integration test
        // Use a different user-data-dir for each test call to avoid bogus leftovers / deleted top level directory:
        //     https://github.com/microsoft/vscode/issues/86382#issuecomment-576632722

        // earliest supported version
        // await runTests({
        //     version: '1.66.0',
        //     ...commonOptions,
        //     launchArgs: [
        //         ...commonOptions.launchArgs,
        //         '--user-data-dir',
        //         path.join(userDataDirRoot, '.test_oldest_supported'),
        //     ],
        // });

        // latest stable
        await runTests({
            version: 'stable',
            ...commonOptions,
            launchArgs: [
                ...commonOptions.launchArgs,
                '--user-data-dir',
                path.join(userDataDirRoot, '.test_stable'),
            ],
        });

        // experimental next releases
        // await runTests({
        //     version: 'insiders',
        //     ...commonOptions,
        //     launchArgs: [
        //         ...commonOptions.launchArgs,
        //         '--user-data-dir',
        //         path.join(userDataDirRoot, '.test_insiders'),
        //     ],
        // });
    } catch (err: unknown) {
        console.error(err);
        process.exit(1);
    }
}

main();
