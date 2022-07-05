import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultChangeDetectionRoutingModule } from './default-change-detection-routing.module';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { DemoExample1Component } from './demo-example1/demo-example1.component';
import { FormsModule } from '@angular/forms';
import { CommentsChildComponent } from './comments-child/comments-child.component';

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    CommentsComponent,
    DemoExample1Component,
    CommentsChildComponent,
  ],
  imports: [CommonModule, FormsModule, DefaultChangeDetectionRoutingModule],
})
export class DefaultChangeDetectionModule {}
