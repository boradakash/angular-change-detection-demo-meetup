import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'default-strategy',
    loadChildren: () =>
      import('./default-change-detection/default-change-detection.module').then(
        (m) => m.DefaultChangeDetectionModule
      ),
  },
  {
    path: 'default-onpush-strategy',
    loadChildren: () =>
      import(
        './default-onpush-change-detection/default-onpush-change-detection.module'
      ).then((m) => m.DefaultOnpushChangeDetectionModule),
  },
  {
    path: 'onpush-strategy',
    loadChildren: () =>
      import('./onpush-change-detection/onpush-change-detection.module').then(
        (m) => m.OnpushChangeDetectionModule
      ),
  },
  { path: '**', redirectTo: 'default-strategy' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
