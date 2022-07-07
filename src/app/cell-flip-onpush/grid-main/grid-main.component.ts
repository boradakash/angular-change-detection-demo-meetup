import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CellDataService } from '../cell-data.service';
import { IGrid } from '../models/cell-interface';

@Component({
  selector: 'app-grid-main',
  templateUrl: './grid-main.component.html',
  styleUrls: ['./grid-main.component.css'],
  
})
export class GridMainComponent implements OnInit {
  grid: IGrid;

  constructor(cellDataService: CellDataService) {
    this.grid = cellDataService.getGridState();
  }

  ngOnInit(): void {}
}
