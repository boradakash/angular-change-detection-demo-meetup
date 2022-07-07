import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridMainComponent } from './grid-main/grid-main.component';

const routes: Routes = [
  { path: '', component: GridMainComponent },
  { path: '*', component: GridMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CellFlipOnpushRoutingModule {}
