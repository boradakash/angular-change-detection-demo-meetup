import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushChangeDetectionRoutingModule } from './onpush-change-detection-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    CommentsComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    OnpushChangeDetectionRoutingModule
  ]
})
export class OnpushChangeDetectionModule { }
