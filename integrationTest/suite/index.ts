import { runCLI } from 'jest';
import * as path from 'path';
import { Config } from '@jest/types';

export async function run(): Promise<void> {
    const projectPath = path.join(__dirname, '../../..');
    const config = path.join(projectPath, 'jest.integration.config.js');
    return new Promise((success, failure) => {
        runCLI({ config } as Config.Argv, [projectPath])
            .then(({ results }) => {
                results.testResults.forEach((testResult) => {
                    testResult.testResults
                        .filter(({ status }) => status === 'passed')
                        .forEach(({ ancestorTitles, title, status }) => {
                            console.info(
                                `  ● ${ancestorTitles} › ${title} (${status})`,
                            );
                        });
                });

                results.testResults.forEach(({ failureMessage }) => {
                    if (failureMessage) {
                        console.error(failureMessage);
                    }
                });

                if (results.numFailedTests) {
                    failure(new Error(`${results.numFailedTests} tests failed.`));
                } else {
                    success();
                }
            })
            .catch((err) => failure(err));
    });
}
