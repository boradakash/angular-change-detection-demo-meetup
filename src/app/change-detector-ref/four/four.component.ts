import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';
import { hightlight } from '../../highlight';

@Component({
  selector: 'app-four',
  template: `
  {{cdCheck()}}
     <a>Cmp4</a>
  `,
  styles: [
  ],
})
export class FourComponent {

  constructor(private el: ElementRef,private ngZone:NgZone) { }
  cdCheck() {
    hightlight(this.el,this.ngZone);
  }
}
