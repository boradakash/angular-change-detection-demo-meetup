import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-six',
  template: `
  {{cdCheck()}}
     <a>Cmp6</a>
  `,
  styles: [
  ]
})
export class SixComponent {

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  cdCheck() {
    hightlight(this.el, this.ngZone);
  }
}
