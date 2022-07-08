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
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {
  @Input() comments: any[] = [];
  comment: string = '';

  constructor(private el: ElementRef, private zone: NgZone) {}
  ngOnInit(): void {}
  like() {
    console.log('like');
  }
  render() {
    hightlightDiv(this.el, this.zone);
    console.log('Render Comment List Component');
  }
}
