import { Component, Input, OnInit } from '@angular/core';
import { NavElement } from 'src/app/app.component';

@Component({
  selector: 'app-nav-element',
  templateUrl: './nav-element.component.html',
  styleUrls: ['./nav-element.component.scss']
})
export class NavElementComponent implements OnInit {
  @Input()
  element: NavElement | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
