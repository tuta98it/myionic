import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PartnerManagementPageRoutingModule } from './partner-management-routing.module';

import { PartnerManagementPage } from './partner-management.page';
import { FooterModule } from '../footer-component/footer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PartnerManagementPageRoutingModule,
  ],
  declarations: [PartnerManagementPage]
})
export class PartnerManagementPageModule {}
