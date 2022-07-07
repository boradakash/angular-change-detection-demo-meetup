import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdMainComponent } from './cd-main/cd-main.component';

const routes: Routes = [
  { path: '', component: CdMainComponent },
  { path: '*', component: CdMainComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChangeDetectorRefRoutingModule {}
