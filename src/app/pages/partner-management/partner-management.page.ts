import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-partner-management',
  templateUrl: './partner-management.page.html',
  styleUrls: ['./partner-management.page.scss'],
})
export class PartnerManagementPage implements OnInit {

  titleApp = 'Xét nghiệm'
  constructor(
    private router: Router,
    private modalController: ModalController) {


    }

  listAccounts = [
    {
      username: '',
      password: '',
      name: '',
      code: '',
      phone: '',
      address: '',
      socialNetwork: {
        facebook: '',
        zalo: '',
        telegram: '',
        twitter: '',
      }
    },
    {
      username: '',
      password: '',
      name: '',
      code: '',
      phone: '',
      address: '',
      socialNetwork: {
        facebook: '',
        zalo: '',
        telegram: '',
        twitter: '',
      }
    },
    {
      username: '',
      password: '',
      name: '',
      code: '',
      phone: '',
      address: '',
      socialNetwork: {
        facebook: '',
        zalo: '',
        telegram: '',
        twitter: '',
      }
    },
  ]


  ngOnInit() {
  }

  onClickTab() {

  }


  logoutAccount() {
    this.router.navigate(['/login'])
  }


  async openDialog() {
    const modal = await this.modalController.create({
      component: ConfirmDialogComponent,
      componentProps : {
        title: "Xác nhận",
        message: "Đăng xuất khỏi tài khoản của bạn?"
      }
    });

    modal.onDidDismiss().then(result => {
      if (result.data) {
        // User clicked OK
        console.log('User clicked OK');
      } else {
        // User clicked Cancel
        console.log('User clicked Cancel');
      }
    });

    return await modal.present();
  }

}
