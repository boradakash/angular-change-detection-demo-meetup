import { TestBed } from '@angular/core/testing';

import { CellDataService } from './cell-data.service';

describe('CellDataService', () => {
  let service: CellDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CellDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
