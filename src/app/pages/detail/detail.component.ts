import { Component, OnInit } from '@angular/core';
import { samples } from '../../samples';

import readme from "raw-loader!../../../../README.md" // substitute this path with your README.md file path

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  sample = samples[0]
  md = readme;

  constructor() { }

  ngOnInit(): void {
  }

}
