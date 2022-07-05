import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
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
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.postsService.getPostList().subscribe((posts: any[]) => {
      this.posts = posts;
      this.cd.detectChanges();
    });
  }
  render() {
    console.log('Render Posts Comp');
  }
}
