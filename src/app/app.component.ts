import { Component } from '@angular/core';
import { samples } from './samples'

import { libs } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beacon-docs';
  samples: any[] = []

  constructor() {
    this.samples = samples

    setTimeout(() => {
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2017,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.ESNext,
        typeRoots: ["node_modules/@types"]
      });

      libs.forEach(lib => {
        const MONACO_LIB_PREFIX = 'file:///node_modules/';
        const path = `${MONACO_LIB_PREFIX}${lib.name}`;
        monaco.languages.typescript.typescriptDefaults.addExtraLib(lib.dts, path);
      })
    }, 1000)
  }
}
