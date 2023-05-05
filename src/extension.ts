import * as vscode from 'vscode';
import { versionNumberString } from './axivionSuiteVersion';

export function activate(_context: vscode.ExtensionContext): void {
    console.log(`Starting Axivion plugin v${versionNumberString} ...`);
}

export function deactivate(): void {
    console.log('Axivion plugin stopped.');
}
