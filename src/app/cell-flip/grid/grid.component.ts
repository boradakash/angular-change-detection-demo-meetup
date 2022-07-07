import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IGrid } from '../models/cell-interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent implements OnInit {
  @Input() data: IGrid = { cells: [], columns: 0, rows: 0 };

  constructor() {}

  ngOnInit(): void {}
}
