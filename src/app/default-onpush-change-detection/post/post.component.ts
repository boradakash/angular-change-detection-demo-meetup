import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any;
  title: String = 'Angular Change Detection Demo';
  constructor() {}

  ngOnInit(): void {}
  changeTitle() {
    this.title = 'Title Changed';
  }
  render() {
    console.log('Render Post Component');
  }
}
