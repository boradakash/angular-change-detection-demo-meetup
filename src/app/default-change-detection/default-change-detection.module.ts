import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultChangeDetectionRoutingModule } from './default-change-detection-routing.module';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';


@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    DefaultChangeDetectionRoutingModule
  ]
})
export class DefaultChangeDetectionModule { }
