import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ServicesComponent } from './services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [IonicModule.forRoot(), RouterModule.forChild([{ path: '', component: ServicesComponent }])],
  exports: [ServicesComponent]
})
export class ServicesModule { }
