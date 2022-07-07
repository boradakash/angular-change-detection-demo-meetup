import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellFlipRoutingModule } from './cell-flip-routing.module';
import { GridComponent } from './grid/grid.component';
import { CellComponent } from './cell/cell.component';
import { GridMainComponent } from './grid-main/grid-main.component';


@NgModule({
  declarations: [
    GridComponent,
    CellComponent,
    GridMainComponent,
  ],
  imports: [
    CommonModule,
    CellFlipRoutingModule
  ]
})
export class CellFlipModule { }
//https://github.com/angular/angular/issues/7055