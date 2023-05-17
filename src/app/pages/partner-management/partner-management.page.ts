import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { PartnerManagementPageModule } from './partner-management.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-partner-management',
  templateUrl: './partner-management.page.html',
  styleUrls: ['./partner-management.page.scss'],
})
export class PartnerManagementPage implements OnInit {
  accCurrent: any = {};
  titleApp = 'Xét nghiệm'
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private alertController: AlertController) {


  }





  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      // Dữ liệu account sẽ được trả về khi đăng nhập thành công.
      this.accCurrent = params as any; // Các thuộc tính của đối tượng được truyền sẽ có trong đối tượng params
      console.log('this.accCurrent: ', this.accCurrent);
    });
  }

  onClickTab() {

  }


  logoutAccount() {
    this.router.navigate(['/login']);
  }


  public alertConfirmButtons = [
    {
      text: 'Huỷ',
      role: 'cancel',
      handler: () => {
        // this.handlerMessage = 'Alert canceled';
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.logoutAccount();
        // this.handlerMessage = 'Alert confirmed';
      },
    },
  ];

  setResult(ev: any) {
    let role = ev.detail.role;
    if (role = 'confirm') {
      // console.log(`Dismissed with role: ${ev.detail.role}`);
    } else if ('cancel') {

    }
  }


  async openDialog() {
    const modal = await this.modalController.create({
      component: ConfirmDialogComponent,
      componentProps: {
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

  // async showConfirmation() {
  //   const alert = await this.alertController.create({
  //     header: 'Xác nhận đăng xuất',
  //     message: 'Bạn có chắc chắn muốn đăng xuất?',
  //     buttons: [
  //       {
  //         text: 'Hủy',
  //         role: 'cancel',
  //       },
  //       {
  //         text: 'Đăng xuất',
  //         handler: () => {
  //           // Xử lý đăng xuất tại đây
  //         }
  //       }
  //     ]
  //   });

  //   await alert.present();
  // }


}
