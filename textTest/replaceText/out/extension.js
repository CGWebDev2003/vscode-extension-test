'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    const disposable = vscode.commands.registerCommand('extension.reverseWord', function () {
        // const editor = vscode.window.activeTextEditor;
        // if(editor) {
        //     let document = editor.document;
        //     let selection = editor.selection;
        //     let curPos = editor.selection.active;
        //     let curLine = curPos.line+1;
        //     let curChar = curPos.character+1;
        //     editor.edit(editBuilder => {
        //         editBuilder.insert(curPos, "function newFunction(param) {\n    console.log(param);\n }");
        //     });    
        // }
        // context.subscriptions.push(disposable);
    });
    vscode.commands.registerCommand('extension.addFunction', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            let document = editor.document;
            let selection = editor.selection;
            let curPos = editor.selection.active;
            let curLine = curPos.line + 1;
            let curChar = curPos.character + 1;
            editor.edit(editBuilder => {
                editBuilder.insert(curPos, "function newFunction(param) {\n    console.log(param);\n}");
            });
        }
        context.subscriptions.push(disposable);
    });
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map