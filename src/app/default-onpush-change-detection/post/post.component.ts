import { Component, ElementRef, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: any;

  constructor(private el: ElementRef, private zone: NgZone) {}

  addComment(post: any, newComment: any) {
    post.comments.push({ text: newComment });
  }

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
