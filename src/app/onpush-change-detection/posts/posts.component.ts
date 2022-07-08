import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
} from '@angular/core';
import { hightlightDiv } from 'src/app/highlight';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  constructor(
    private postsService: PostsService,
    private cd: ChangeDetectorRef,
    private el: ElementRef,
    private zone: NgZone
  ) {}
  ngOnInit(): void {
    this.postsService.getPostList().subscribe((posts: any[]) => {
      this.posts = posts;
      this.cd.detectChanges();
    });
  }
  render() {
    hightlightDiv(this.el, this.zone);
    console.log('Render Posts Comp');
  }
}
