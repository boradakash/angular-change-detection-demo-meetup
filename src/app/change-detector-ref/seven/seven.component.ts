import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { hightlight } from '../../highlight';

@Component({
  selector: 'app-seven',
  template: `
  {{cdCheck()}}
     <a>Cmp7</a>
  `,
  styles: [
  ]
})
export class SevenComponent {

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  cdCheck() {
    hightlight(this.el, this.ngZone);
  }
}
