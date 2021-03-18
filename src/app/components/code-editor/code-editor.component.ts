import * as beacon from '@airgap/beacon-sdk';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MonacoEditorComponent, MonacoEditorConstructionOptions, MonacoEditorLoaderService, MonacoStandaloneCodeEditor } from '@materia-ui/ngx-monaco-editor';
import * as ts from "typescript";

import * as taquito from '@taquito/taquito'
import * as taquitoWallet from '@taquito/beacon-wallet'


function replaceAll(string: string, search: string, replace: string) {
  return string.split(search).join(replace);
}

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss']
})
export class CodeEditorComponent implements OnInit {
  @ViewChild(MonacoEditorComponent, { static: false })
  monacoComponent: MonacoEditorComponent | undefined;
  editorOptions: MonacoEditorConstructionOptions = {
    theme: 'vs-dark',
    language: "typescript",
    roundedSelection: true,
    autoIndent: "full"
  };

  @Input()
  sample: { name: string; value: string; } = { name: '', value: '' }

  code: string = '';

  originalCode: string = 'function x() { // TODO }';

  result: string = ''

  constructor() {

    setTimeout(() => {
      this.editorInit(this.monacoComponent?.editor)
    }, 1000)
  }

  ngOnInit(): void {
    this.code = `console.log(data);
    
    import { DAppClient } from '@airgap/beacon-sdk';

    const dAppClient = new DAppClient({ name: 'a' })
    return await dAppClient.requestPermissions()
    console.log(Object.keys(data))
    `;

    this.code = '\n' + this.sample.value + '\n'
  }

  editorInit(editor?: MonacoStandaloneCodeEditor) {
    if (!editor) { return }
    if (!this.monacoComponent) { return }

    // const lib = `declare class Facts {
    //   /**
    //    * Returns the next fact
    //    *
    //    * [Online documentation](http://www.google.de)
    //    */
    //   static next(): string;
    // }`;

    // const uri = monaco.Uri.file("dir/beacon.d.ts");
    // monaco.languages.typescript.javascriptDefaults.addExtraLib(lib, uri.toString());
    // monaco.editor.createModel(lib, "typescript", uri);


    // const libs = [{
    //   name: '@airgap/beacon-sdk/index.d.ts',
    //   dts: x2
    // }, {
    //   name: '@airgap/beacon-sdk/utils/tezblock-blockexplorer.d.ts',
    //   dts: x1
    // }, {
    //   name: '@airgap/beacon-sdk/utils/block-explorer.d.ts',
    //   dts: x3
    // }, {
    //   name: '@airgap/beacon-sdk/clients/dapp-client/DAppClient.d.ts',
    //   dts: x
    // }]



    // monaco.languages.typescript.typescriptDefaults.addExtraLib(
    //   'export declare function add(a: number, b: number): number',
    //   'file:///node_modules/@airgap/beacon-sdk/index.d.ts'
    // );

    editor.setModel(monaco.editor.createModel(
      this.code,
      'typescript',
      monaco.Uri.parse(`file:///main-${Math.random()}.ts`)
    ))

    console.log(editor.getValue())

    // monaco.editor.setTheme('vs');
    // editor.setSelection({
    //   startLineNumber: 1,
    //   startColumn: 1,
    //   endColumn: 50,
    //   endLineNumber: 3
    // });
  }

  async execute() {
    this.result = ''
    const myLog = (...args: any[]) => {
      console.log('MY LOG')
      this.result += '\n' + args.join(' ')
      console.log(...args)
    }
    let myCode = await this.removeImports(this.code)
    console.log('processed', myCode)
    myCode = replaceAll(myCode, 'console.log(', 'progress(')
    let code = ts.transpile(`({
      run: async (beacon: any, taquito: any, taquitoWallet: any, progress: any): string => {
        Object.keys(beacon).forEach(key => {
          window[key] = beacon[key]
        })
        Object.keys(taquito).forEach(key => {
          window[key] = taquito[key]
        })
        Object.keys(taquitoWallet).forEach(key => {
          window[key] = taquitoWallet[key]
        })
        return (async () => {${myCode};
        if (typeof variable !== 'undefined') {
          return result
        }
        })()
      })`);
    let runnable: any
    try {
      runnable = eval(code);
      runnable.run(beacon, taquito, taquitoWallet, myLog).then((result: string) => { console.log(result); this.result += '\n' + JSON.stringify(result, null, 2) }).catch((err: any) => { console.warn(err); this.result = JSON.stringify(err, null, 2) });
    } catch (e) {
      this.result = e
    }
  }

  async resetAndExecute() {
    const dAppClient = new beacon.DAppClient({ name: 'a' })
    await dAppClient.destroy()
    this.execute()
  }

  async removeImports(code: string) {
    const lines = code.split('\n')
    let include = true

    return lines.map(l => {
      if (l.trim().startsWith('import')) {
        include = false
      }

      const out = include ? l : undefined

      if (l.indexOf('@airgap/beacon-sdk') >= 0 || l.indexOf('@taquito') >= 0) {
        include = true
      }

      return out
    }).filter(l => !!l).join('\n')
  }
}
