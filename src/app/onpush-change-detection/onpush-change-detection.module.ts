import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnpushChangeDetectionRoutingModule } from './onpush-change-detection-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { CommentsChildComponent } from './comments-child/comments-child.component';
import { FormsModule } from '@angular/forms';
import { Demo2Component } from './demo2/demo2.component';
import { Demo2NewsletterComponent } from './demo2-newsletter/demo2-newsletter.component';

@NgModule({
  declarations: [
    PostComponent,
    PostsComponent,
    CommentsComponent,
    CommentsChildComponent,
    Demo2Component,
    Demo2NewsletterComponent,
  ],
  imports: [CommonModule,FormsModule, OnpushChangeDetectionRoutingModule],
})
export class OnpushChangeDetectionModule {}
