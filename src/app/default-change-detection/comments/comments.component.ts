import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: any[] = [];
  comment: string = '';

  constructor() {}
  ngOnInit(): void {}
  like() {
    console.log('like');
  }
  render() {
    console.log('Render Comment List Component');
  }
}
