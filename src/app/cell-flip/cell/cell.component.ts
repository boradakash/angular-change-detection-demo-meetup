import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { CellDataService } from '../cell-data.service';
import { ICell } from '../models/cell-interface';


@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CellComponent implements OnInit {
  @Input() data: ICell = new ICell();

  constructor(
    private cellDataService: CellDataService,
    private zone: NgZone,
    private el: ElementRef,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //console.log('init');
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    // console.log(changes);
  }

  ngAfterViewChecked() {
    const elem = this.el.nativeElement.querySelectorAll('div.flipper')[0];
    if (!elem) {
      return;
    }

    // Trigger a highlight for visualization
    const highlightCSS = 'changed';
    elem.classList.add(highlightCSS);
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        elem.classList.remove(highlightCSS);
      }, 500);
    });
  }

  ngDoCheck() {}

  onClick(): void {
    console.log('onclick');
    this.cellDataService.flipCell(this.data.id);
  }
}
