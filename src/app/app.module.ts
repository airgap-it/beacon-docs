import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './pages/detail/detail.component';
import { NavElementComponent } from './components/nav-element/nav-element.component';

@NgModule({
  declarations: [AppComponent, CodeEditorComponent, DetailComponent, NavElementComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule,
    NgbCollapseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
