'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const vscode_1 = require("vscode");
function activate(context) {
    const disposable = vscode.commands.registerCommand('extension.reverseWord', function () {
        // Get the active text editor
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            // const document = editor.document;
            // const selection = editor.selection;
            // // Get the word within the selection
            // const word = document.getText(selection);
            // const reversed = word.split('').reverse().join('');
            // editor.edit(editBuilder => {
            // 	editBuilder.replace(selection, reversed);
            // });
            const document = editor.document;
            const pos = new vscode_1.Position(1, 1);
            document.insert(pos, "Test 123");
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map