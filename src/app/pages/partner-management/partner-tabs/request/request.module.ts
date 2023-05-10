import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { RequestComponent } from './request.component';

@NgModule({
  declarations: [RequestComponent],
  imports: [IonicModule.forRoot(), RouterModule.forChild([{ path: '', component: RequestComponent }])],
  exports: [RequestComponent]
})
export class RequestModule { }
