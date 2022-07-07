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
  {
    path: 'cell-flip',
    loadChildren: () =>
      import('./cell-flip/cell-flip.module').then((m) => m.CellFlipModule),
  },
  {
    path: 'cell-flip-onpush',
    loadChildren: () =>
      import('./cell-flip-onpush/cell-flip-onpush.module').then(
        (m) => m.CellFlipOnpushModule
      ),
  },
  {
    path: 'change-detector-ref',
    loadChildren: () =>
      import('./change-detector-ref/change-detector-ref.module').then(
        (m) => m.ChangeDetectorRefModule
      ),
  },
  { path: '**', redirectTo: 'default-strategy' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
