import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { ICell, IGrid } from './models/cell-interface';

@Injectable({
  providedIn: 'root',
})
export class CellDataService {
  readonly TOTAL: number = 500;

  private currentState: IGrid;

  constructor() {
    this.currentState = {
      cells: _.range(this.TOTAL).map((n: any) => {
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

  flipCell(id: any): void {
    let matchedCell: ICell = _.find(
      this.currentState.cells,
      (c: any) => c.id === id
    ) || { changed: false, flipped: true, id: 0, text: '' };
    console.log(matchedCell);
    if (matchedCell) {
      matchedCell.flipped = !matchedCell.flipped;
    }
  }

  resetChanged(): void {
    // To reset the 'changed' visualization
    _.each(this.currentState.cells, (c: any) => {
      c.changed = false;
    });
  }

  addCells(count: number) {}

  removeCells(count: number) {}
}
