import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FooterComponent } from './footer-component.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [BrowserModule, IonicModule.forRoot() ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [FooterComponent],
  exports : [
    FooterComponent
  ]
})
export class FooterModule {}
