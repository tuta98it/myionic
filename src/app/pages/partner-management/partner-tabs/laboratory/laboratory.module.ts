import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { LaboratoryComponent } from './laboratory.component';
import { CommonModule } from '@angular/common';
import { IsEmptyPipe } from 'src/app/pipes/is-empty.pipe';
import { SharedModule } from '../../../../shared/modules/share.module';

@NgModule({
  declarations: [LaboratoryComponent, ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule.forChild([{ path: '', component: LaboratoryComponent }]),
    SharedModule,

  ],
  exports: [LaboratoryComponent]
})
export class LaboratoryModule { }
