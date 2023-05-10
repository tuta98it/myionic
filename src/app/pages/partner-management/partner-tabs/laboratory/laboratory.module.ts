import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { LaboratoryComponent } from './laboratory.component';

@NgModule({
  declarations: [LaboratoryComponent],
  imports: [IonicModule.forRoot(), RouterModule.forChild([{ path: '', component: LaboratoryComponent }])],
  exports: [LaboratoryComponent]
})
export class LaboratoryModule { }
