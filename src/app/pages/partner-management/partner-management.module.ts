import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerManagementPageRoutingModule } from './partner-management-routing.module';

import { PartnerManagementPage } from './partner-management.page';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/modules/share.module';

@NgModule({
  declarations: [PartnerManagementPage],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
    PartnerManagementPageRoutingModule,
    IonicModule.forRoot({ mode: 'ios' }),
  ]
})
export class PartnerManagementPageModule { }
