import * as vscode from 'vscode';
import { ArtWorkWebview } from './webview';

export function activate(context: vscode.ExtensionContext) {
    console.log('ArtWork-Artificial-Agents is now active!');

    const webview = new ArtWorkWebview(context);

    // Register the "Start Chat" command
    let disposable = vscode.commands.registerCommand('artwork.startChat', () => {
        webview.show();
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {
    console.log('ArtWork-Artificial-Agents is now deactivated.');
} 