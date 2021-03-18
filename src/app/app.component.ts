import { Component } from '@angular/core';
import { MonacoEditorLoaderService } from '@materia-ui/ngx-monaco-editor';
import { samples } from './samples';

import { libs } from './types';

export interface NavChild {
  active: boolean,
  name: string,
  collapsed: boolean, // remove
  children: []
  link: string
}

export interface NavGroup {
  active: boolean, // remove
  link: string // remove
  name: string,
  collapsed: boolean,
  children: NavElement[]
}

export type NavElement = NavGroup | NavChild

const getChild = (name: string, link: string, children: NavElement[] = []) => ({
  name,
  link,
  children,
  active: false,
  collapsed: true,
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'beacon-docs';

  monacoIsInitialized: boolean = false

  samples: any[] = [];

  nav: NavElement[] = [
    getChild('Overview', '#', [
      getChild('test2', '#', [
        getChild('test3', '#', []),
        getChild('test4', '#', [
          getChild('test5', '#', []),
          getChild('test6', '#', []),
          getChild('test7', '#', []),
        ]),
        getChild('test8', '#', []),
      ]),
      getChild('test9', '#', []),
      getChild('test11', '#', []),
    ]),
    getChild('test12', '#', []),
    getChild('test13', '#', [])
  ]

  constructor(private monacoLoaderService: MonacoEditorLoaderService) {
    this.samples = samples;

    this.monacoLoaderService.isMonacoLoaded$
      .subscribe(() => { this.initMonaco })
  }

  initMonaco() {
    if (this.monacoIsInitialized) {
      return
    }
    this.monacoIsInitialized = true
    console.log('Initializing Monaco')

    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ES2017,
      allowNonTsExtensions: true,
      moduleResolution:
        monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.ESNext,
      typeRoots: ['node_modules/@types'],
    });

    libs.forEach((lib) => {
      const MONACO_LIB_PREFIX = 'file:///node_modules/';
      const path = `${MONACO_LIB_PREFIX}${lib.name}`;
      monaco.languages.typescript.typescriptDefaults.addExtraLib(
        lib.dts,
        path
      );
    });
  }
}
