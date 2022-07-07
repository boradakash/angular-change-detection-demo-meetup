export interface IGrid {
  cells: ICell[];
  rows: number;
  columns: number;
}

// Angular CLI had a bug which prevents to export multiple interfaces
// using class
export class ICell {
  id: number;
  flipped: boolean;
  text: string;
  changed: boolean;
  constructor() {
    this.id = 0;
    this.flipped = false;
    this.text = '';
    this.changed = false;
  }
}


// export const enum ViewState {
//   BeforeFirstCheck = 1 << 0,
//   FirstCheck = 1 << 1,
//   Attached = 1 << 2,
//   ChecksEnabled = 1 << 3,
//   IsProjectedView = 1 << 4,
//   CheckProjectedView = 1 << 5,
//   CheckProjectedViews = 1 << 6,
//   Destroyed = 1 << 7,

//   CatDetectChanges = Attached | ChecksEnabled,
//   CatInit = BeforeFirstCheck | CatDetectChanges,
// }