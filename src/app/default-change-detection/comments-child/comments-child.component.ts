import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { hightlight, hightlightDiv } from 'src/app/highlight';

@Component({
  selector: 'app-comments-child',
  templateUrl: './comments-child.component.html',
  styleUrls: ['./comments-child.component.css'],
})
export class CommentsChildComponent implements OnInit {
  title: string = '';
  constructor(private el: ElementRef, private zone: NgZone) {}

  ngOnInit(): void {}
  render() {
    hightlightDiv(this.el, this.zone);
    console.log('Render Add Comment Component');
  }
}
