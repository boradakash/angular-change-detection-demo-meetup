import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-demo-example1',
  templateUrl: './demo-example1.component.html',
  styleUrls: ['./demo-example1.component.css'],
})
export class DemoExample1Component implements OnInit {
  title: String = 'Angular Change Detection Demo';
  constructor(private el: ElementRef, private zone: NgZone) {}
  counter = 0;
  ngOnInit(): void {
    setInterval(() => {
      this.counter = this.counter + 1;
    }, 1000);
  }
  changeTitle() {
    this.title = 'Title Changed';
  }
  render() {
    console.log('Render');
  }
}
