import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-child',
  templateUrl: './comments-child.component.html',
  styleUrls: ['./comments-child.component.css'],
})
export class CommentsChildComponent implements OnInit {
  title: string = '';
  constructor() {}

  ngOnInit(): void {}
  render() {
    console.log('Render Add Comment Component');
  }
}
