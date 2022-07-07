import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CellFlipOnpushRoutingModule } from './cell-flip-onpush-routing.module';
import { CellComponent } from './cell/cell.component';
import { GridComponent } from './grid/grid.component';
import { GridMainComponent } from './grid-main/grid-main.component';


@NgModule({
  declarations: [
    CellComponent,
    GridComponent,
    GridMainComponent
  ],
  imports: [
    CommonModule,
    CellFlipOnpushRoutingModule
  ]
})
export class CellFlipOnpushModule { }
