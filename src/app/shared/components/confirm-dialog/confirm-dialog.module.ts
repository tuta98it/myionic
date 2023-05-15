import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule , IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations : [ConfirmDialogComponent],
  imports: [CommonModule, IonicModule.forRoot(), FormsModule,],
  exports: [ConfirmDialogComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [ConfirmDialogComponent],
})

export class ConfirmDialogModule {}
