import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { NotificationsComponent } from './notifications.component';

@NgModule({
  declarations: [NotificationsComponent],
  imports: [IonicModule.forRoot(),
     RouterModule.forChild([{ path: '', component: NotificationsComponent }]),
     CommonModule
    ],
  exports: [NotificationsComponent]
})
export class NotificationsModule { }
