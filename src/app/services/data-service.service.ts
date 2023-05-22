import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private data: any;

  setData(data: any) {
    console.log('set-data')
    this.data = data;
  }

  getData() {
    console.log('getdata')
    return this.data;
  }
}
