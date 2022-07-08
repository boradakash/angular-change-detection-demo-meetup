import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
} from '@angular/core';
import { hightlightDiv } from 'src/app/highlight';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any;
  title: String = 'Angular Change Detection Demo';
  constructor(private el: ElementRef, private zone: NgZone) {}

  ngOnInit(): void {}
  changeTitle() {
    this.title = 'Title Changed';
  }
  render() {
    hightlightDiv(this.el, this.zone);
    console.log('Render Post Component');
  }
}
