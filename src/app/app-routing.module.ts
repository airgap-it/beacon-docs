import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { DetailComponent } from './pages/detail/detail.component';

const routes: Routes = [{ path: '', component: DetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
