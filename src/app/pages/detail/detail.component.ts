import { Component, OnInit } from '@angular/core';
import { samples } from '../../samples';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  sample = samples[0]

  constructor() { }

  ngOnInit(): void {
  }

}
