import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { SharedModule } from '../shared/modules/share.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    LoginPageRoutingModule,
    RouterModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {

}
