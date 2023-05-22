import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

const storageKey = 'account';


const defaultAccount = {
  id: 0,
  username: '',
  password: '',
  avatar: '',
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
}


@Injectable({
  providedIn: 'root',
})
export class AccountService {
  account: any[];

  constructor(private storageService: StorageService) {
    this.account =
      storageService.getData(storageKey) || defaultAccount;
  }


  setAccount(account: any) {
    this.account = account;
    this.storageService.setData(storageKey, this.account);
  }

  getAccount() {
    this.account = this.storageService.getData(storageKey);
    return this.account;
  }

}
