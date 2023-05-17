import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { ServicesComponent } from './services.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { IsEmptyPipe } from 'src/app/pipes/is-empty.pipe';
import { SharedModule } from '../../../../shared/modules/share.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild([{ path: '', component: ServicesComponent }]),
    SharedModule,
  ],
  providers : [CurrencyPipe],
  exports: [ServicesComponent]
})
export class ServicesModule { }
