import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoExample1Component } from './demo-example1/demo-example1.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'demo1', component: DemoExample1Component },
  { path: '*', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaultChangeDetectionRoutingModule {}
