import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})



export class LoginPage {
  passwordLogin = '';
  showPassword = false;
  constructor(private router: Router) {
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  forgotPassword() {
    // Xử lý khi người dùng nhấn vào nút quên mật khẩu
    // Chuyển hướng đến trang quên mật khẩu hoặc hiển thị form quên mật khẩu...
  }


  loginAccount() {
    this.router.navigate(['/partner-management'])
  }
}
