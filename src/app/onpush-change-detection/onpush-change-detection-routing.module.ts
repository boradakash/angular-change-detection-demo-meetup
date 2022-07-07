import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo2Component } from './demo2/demo2.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'demo', component: Demo2Component },
  { path: '*', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnpushChangeDetectionRoutingModule {}
