import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  @Input() comments: any[] = [];
  @Output() addComment = new EventEmitter();
  newComment: any;

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngOnInit() {}

  ngAfterViewChecked(): void {
    this.zone.runOutsideAngular(() => {
      this.el.nativeElement.classList.add('highlight');
      setTimeout(() => {
        this.el.nativeElement.classList.remove('highlight');
      }, 1500);
    });
  }
}
