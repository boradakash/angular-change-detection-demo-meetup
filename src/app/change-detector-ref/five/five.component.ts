import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-five',
  template: `
    {{ cdCheck() }}
    <a>Cmp5</a>
  `,
  styles: [],
})
export class FiveComponent {
  constructor(private el: ElementRef, private ngZone: NgZone) {}
  cdCheck() {
    hightlight(this.el, this.ngZone);
  }
}
