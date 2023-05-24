import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, IonModal, ModalController } from '@ionic/angular';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { OverlayEventDetail } from '@ionic/core/components';
import { PartnerManagementPageModule } from './partner-management.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DataService } from 'src/app/services/data-service.service';
import { IsEmptyPipe } from 'src/app/pipes/is-empty.pipe';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-partner-management',
  templateUrl: './partner-management.page.html',
  styleUrls: ['./partner-management.page.scss'],
})
export class PartnerManagementPage implements OnInit, AfterViewInit {
  @ViewChild(IonModal) modal!: IonModal;
  linkAvatarDefault: string = 'https://ionicframework.com/docs/img/demos/avatar.svg';

  accCurrent: any = {};
  titleApp = 'Xét nghiệm';
  titleContact = 'Liên hệ';
  isModalOpenUser = false;
  isModalOpenSales = false;
  isModalOpenContact = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalController: ModalController,
    private alertController: AlertController,
    private dataService: DataService,
    private accountService : AccountService) {

  }


  async ngAfterViewInit() {
    // console.log('ngAfterViewInit');
    // await this.getAccCurrent();
  }





  //  ngOnInit() {
  // console.log('ngOnInit');
  // this.activatedRoute.queryParams.subscribe(params => {
  //   // Dữ liệu account sẽ được trả về khi đăng nhập thành công.
  //   this.accCurrent = params as any; // Các thuộc tính của đối tượng được truyền sẽ có trong đối tượng params
  //   console.log('this.accCurrent: ', this.accCurrent);
  // });


  // console.log('ngOnInit')
  // this.getAccCurrent();
  // await this.getAccCurrent();

  // }

  async ngOnInit() {
    console.log('ngOnInit');
    // this.activatedRoute.queryParams.subscribe(params => {
    //   Dữ liệu account sẽ được trả về khi đăng nhập thành công.
    //   this.accCurrent = params as any; // Các thuộc tính của đối tượng được truyền sẽ có trong đối tượng params
    //   console.log('this.accCurrent: ', this.accCurrent);
    // });


    console.log('ngOnInit')
    await this.getAccCurrent();
    // await this.getAccCurrent();

  }



  getAccCurrent() {
    console.log('getAccCurrent');
    // Dữ liệu account sẽ được  trả về khi đăng nhập thành công.
    this.accCurrent = this.accountService.getAccount();
    console.log('this.accCurrent: ', this.accCurrent);
    if (this.isEmpty(this.accCurrent)) {
      console.log('this.isEmpty accCurren true');
      this.router.navigate(['/login']);
    }
  }

  setOpenModalUser(isOpen: boolean) {
    this.isModalOpenUser = isOpen;

  }

  setOpenModalSales(isOpen: boolean) {
    this.isModalOpenSales = isOpen;
  }

  setOpenModalContact(isOpen: boolean) {
    this.isModalOpenContact = isOpen;
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

  closeModalInforAcc() {
    this.modal.dismiss(null, 'close');
  }

  confirm() {
    this.modal.dismiss('', 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'close') {
      // this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  async presentAlertContactSalesStaff() {
    this.titleContact = 'Liên hệ NVKD';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Nhân viên CSKH của bạn là Trần Thị Mỹ Linh. SĐT: 0987548294.',
      message: 'Bạn có muốn gặp Trần Thị Mỹ Linh không?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
            // this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'Có',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              '',
              'Cảm ơn bạn đã gửi yêu cầu, Trần Thị Mỹ Linh sẽ liên hệ lại với bạn trong thời gian ngắn nhất.');
            // this.logoutAccount();
            // this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertContactSwitchboard() {
    this.titleContact = 'Liên hệ Tổng đài';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Tổng đài sẽ phụ trách các công việc lên đơn, phản ánh tình trạng kết quả muộn, ...',
      message: 'Bạn có muốn gặp tổng đài không?',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
          },
        },
        {
          text: 'Có',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              '',
              'Cảm ơn bạn đã gửi yêu cầu, Trần Thị Mỹ Linh sẽ liên hệ lại với bạn trong thời gian gần nhất.',);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertContactPaymentDepartment() {
    this.titleContact = 'Liên hệ Bộ phận thanh toán';
    const alert = await this.alertController.create({
      header: 'Thông báo',
      subHeader: 'Không có gì đâu',
      message: 'Đừng liên hệ',
      buttons: [
        {
          text: 'Không',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
          },
        },
        {
          text: 'Có',
          role: 'confirm',
          handler: () => {
            this.presentAlertNotification(
              'Thông báo',
              'Liên hệ bộ phận thanh toán',
              'Thôi đừng liên hệ nữa');
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async presentAlertNotification(header:any, subHeader:any, message:any) {
    // this.titleContact = 'Liên hệ NVKD';
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: [
        {
          text: 'Đóng',
          role: 'cancel',
          handler: () => {
            this.titleContact = 'Liên hệ';
            // this.handlerMessage = 'Alert canceled';
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }

}
