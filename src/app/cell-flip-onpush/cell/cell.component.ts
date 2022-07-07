import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CellDataService } from '../cell-data.service';
import { ICell } from '../models/cell-interface';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent implements OnInit {
  @Input() data: ICell = new ICell();

  constructor(
    private cellDataService: CellDataService,
    private zone: NgZone,
    private el: ElementRef,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked() {
    // "ngAfterViewChecked" is always getting executed (irrespective of Default or OnPush) making it not useful to trigger the visualization.
    // Angular had a bug on this - https://github.com/angular/angular/issues/7055
    // Using a work-around the visualize the change detection.
  }

  ngDoCheck() {}

  onClick(): void {
    this.cellDataService.flipCell(this.data.id);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        // Since Angular doesn't detect any of these changes (due to onpush),
        // Reset the 'changed' state outside Angular
        const elem = document.querySelectorAll(
          `[data-id="${this.data.id}"]`
        )[0];
        if (!elem) {
          return;
        }
        elem.classList.remove('changed');
        this.cellDataService.resetChanged();
      }, 1200);
    });
  }
}
