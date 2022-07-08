import { Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { hightlightDiv } from 'src/app/highlight';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private postsService: PostsService
  ) {}
  ngOnInit(): void {
    this.postsService.getPostList().subscribe((posts: any[]) => {
      this.posts = posts;
    });
  }

  render() {
    hightlightDiv(this.el, this.zone);
    console.log('Render Posts Comp');
  }
}
