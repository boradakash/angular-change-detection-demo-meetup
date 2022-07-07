import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeDetectorRefRoutingModule } from './change-detector-ref-routing.module';
import { CdMainComponent } from './cd-main/cd-main.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';

@NgModule({
  declarations: [
    CdMainComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
  ],
  imports: [CommonModule, ChangeDetectorRefRoutingModule],
})
export class ChangeDetectorRefModule {}
