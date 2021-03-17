import { Component } from '@angular/core';
import { samples } from './samples'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beacon-docs';
  samples = samples
}
