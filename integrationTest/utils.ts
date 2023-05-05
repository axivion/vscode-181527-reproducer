import * as vscode from 'vscode';

export function getExtension(): vscode.Extension<void> {
    const extension = vscode.extensions.getExtension('axivion.vscodeplugin');
    if (extension === undefined) {
        throw Error('Error: extension was not loaded by vscode');
    }
    return extension;
}
