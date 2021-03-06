import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { DefaultOnpushChangeDetectionRoutingModule } from './default-onpush-change-detection-routing.module';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentsChildComponent } from './comments-child/comments-child.component';
//import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    CommentsComponent,
    CommentsChildComponent,
  ],
  imports: [
    CommonModule,
    DefaultOnpushChangeDetectionRoutingModule,
    FormsModule
  ],
})
export class DefaultOnpushChangeDetectionModule {}
