import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  comments: string = '';
  render() {
    console.log('Render Comment Component');
  }
}
