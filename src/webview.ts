import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export class ArtWorkWebview {
    private static readonly viewType = 'artworkWebview';
    private panel: vscode.WebviewPanel | undefined;

    constructor(private context: vscode.ExtensionContext) {}

    public show() {
        if (this.panel) {
            this.panel.reveal();
        } else {
            this.panel = vscode.window.createWebviewPanel(
                ArtWorkWebview.viewType,
                'ArtWork Assistant',
                vscode.ViewColumn.One,
                {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                    localResourceRoots: [this.context.extensionUri]
                }
            );

            this.panel.webview.html = this.getWebviewContent();

            this.panel.onDidDispose(() => {
                this.panel = undefined;
            });
        }
    }

    private getWebviewContent(): string {
        // Load the HTML file from resources
        const htmlPath = path.join(this.context.extensionPath, 'resources', 'ArtWork-Artificial-Agents.html');
        return fs.readFileSync(htmlPath, 'utf8');
    }
} 