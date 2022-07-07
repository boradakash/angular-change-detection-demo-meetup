import { Injectable } from '@angular/core';
import { ICell, IGrid } from './models/cell-interface';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class CellDataService {
  readonly TOTAL: number = 500;

  private currentState: IGrid;

  constructor() {
    this.currentState = {
      cells: _.range(this.TOTAL).map((n) => {
        return <ICell>{
          id: n,
          flipped: false,
          text: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'[
            Math.floor(Math.random() * 36)
          ],
          changed: false,
        };
      }),
      rows: 10,
      columns: 10,
    };
  }

  getGridState(): IGrid {
    return this.currentState;
  }

  flipCell(id:any): void {
    console.log(id);
    let index: number = _.findIndex(
      this.currentState.cells,
      (c) => c.id === id
    );
    let updatedCell = Object.assign({}, this.currentState.cells[index], {
      flipped: !this.currentState.cells[index].flipped,
    });

    this.currentState.cells = [
      ...this.currentState.cells.slice(0, index),
      updatedCell,
      ...this.currentState.cells.slice(index + 1),
    ];

    // To trigger the 'changed' visualization
    _.each(this.currentState.cells, (c) => {
      c.changed = true;
    });
  }

  resetChanged(): void {
    // To reset the 'changed' visualization
    _.each(this.currentState.cells, (c) => {
      c.changed = false;
    });
  }

  addCells(count: number) {}

  removeCells(count: number) {}
}
