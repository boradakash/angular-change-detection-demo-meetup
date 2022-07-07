import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-three',
  template: `
  {{cdCheck()}}
            <a>Cmp3</a>

<ul>
    <li>
        <app-six></app-six>
    </li>
    <li>
        <app-seven></app-seven>
    </li>
</ul>
  `,
  styles: [
  ]
})
export class ThreeComponent {

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  cdCheck() {
    hightlight(this.el, this.ngZone);
  }
}
