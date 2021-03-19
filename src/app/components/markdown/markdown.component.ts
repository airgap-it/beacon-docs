import { Renderer, setOptions } from 'marked';
import * as highlightjs from 'highlight.js';
import * as DOMPurify from 'dompurify';

import {
  Component, Input, OnChanges, SimpleChange, ViewEncapsulation
} from '@angular/core';
import {
  DomSanitizer, SafeHtml
} from '@angular/platform-browser';
@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent {
  @Input() text: string = '';
  data: SafeHtml | undefined;
  md: any;

  static highlightCode(code: string, language: string): string {
    if (!(language && highlightjs.getLanguage(language))) {
      // use 'markdown' as default language
      language = 'markdown';
    }

    const result = highlightjs.highlight(language, code).value;
    return `<code class="hljs ${language}">${result}</code>`;
  }

  constructor(private sanitizer: DomSanitizer) {
    const renderer = new Renderer();
    renderer.code = MarkdownComponent.highlightCode;
    this.md = setOptions({ renderer });
  }

  markdownToSafeHtml(value: string): SafeHtml {
    const html = this.md(value);
    const safeHtml = html // DOMPurify.sanitize(html);
    return this.sanitizer.bypassSecurityTrustHtml(safeHtml);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (propName === 'text') {
        const value = changes[propName].currentValue;
        if (value) {
          console.log(value)
          this.data = this.markdownToSafeHtml(value);
        }
      }
    }
  }
}
