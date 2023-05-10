import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { PartnershipComponent } from './partnership.component';

@NgModule({
  declarations: [PartnershipComponent],
  imports: [IonicModule.forRoot(), RouterModule.forChild([{ path: '', component: PartnershipComponent }])],
  exports: [PartnershipComponent]
})
export class PartnershipModule { }
