import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IsEmptyPipe } from '../pipes/is-empty.pipe';
import { ConfirmDialogComponent } from '../shared/components/confirm-dialog/confirm-dialog.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})



export class LoginPage {
  accountLogin = {
    username: '',
    password: '',
    error: ''
  }
  isEmptyUsername = false;
  isEmptyPassword = false;
  showPassword = false;

  listAccounts = [
    {
      username: 'linhtl',
      password: '9167',
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
      username: 'tuta',
      password: '9178',
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

  constructor(
    private router: Router,
    private modalController: ModalController) {
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }

  onKeyUpInputUsername() {
    this.accountLogin.error = '';

    // Set is show message error Username
    this.isEmptyUsername = this.isEmpty(this.accountLogin.username);
  }

  onKeyUpInputPassword() {
    this.accountLogin.error = '';

    // Set is show messsage error Password
    this.isEmptyPassword = this.isEmpty(this.accountLogin.password);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  forgotPassword() {
    this.openDialog();
    // Xử lý khi người dùng nhấn vào nút quên mật khẩu
    // Chuyển hướng đến trang quên mật khẩu hoặc hiển thị form quên mật khẩu...

  }


  async openDialog() {
    const modal = await this.modalController.create({
      component: ConfirmDialogComponent,
      componentProps: {
        title: "Bạn quên mật khẩu?",
        message: "Ui zoi ơi bạn ơi, tôi chịu!, bạn thứ cố nhớ lại coi :). Hiện tại hệ thông đang buồn nhủ  ^zzz^zzz"
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

  loginAccount() {
    let acc = this.accountLogin;
    let listAcc = this.listAccounts;

    if (this.isEmpty(acc.username)) {
      // Show message error Username
      this.isEmptyUsername = true;
    }

    if (this.isEmpty(acc.password)) {
      // Show message error Password
      this.isEmptyPassword = true;
    }

    if (!(this.isEmptyUsername || this.isEmptyPassword)) {
      let listAccIncludesUsername = listAcc.filter((objAcc) => {
        return objAcc.username == acc.username;
      });

      if (this.isEmpty(listAccIncludesUsername)) {
        this.accountLogin.error = 'Tên đăng nhập hoặc mật khẩu không hợp lệ'
      } else {
        let accIncludesPassword = listAccIncludesUsername.find((objAcc) =>
          objAcc.password === acc.password
        );

        if (this.isEmpty(accIncludesPassword)) {
          this.accountLogin.error = 'Tên đăng nhập hoặc mật khẩu không hợp lệ';
        } else {
          this.router.navigate(['/partner-management'])
        }
      }
    }
  }




}
