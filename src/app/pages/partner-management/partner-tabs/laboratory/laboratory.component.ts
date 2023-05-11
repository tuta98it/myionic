import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.scss'],
})
export class LaboratoryComponent  implements OnInit {

  listPartnerLab = [
    {
      name: '1234-1643 Trần Văn A',
      phone: '0981123574',
      address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
      conditon: 'Viêm loét dạ dày tá tràng',
      status: 'Chưa nhận yêu cầu',
    },

    {
      name: '1234 - 2341 Trần Thị Lý',
      phone: '0234538592',
      address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
      conditon: 'Sốt xuất huyết',
      status: 'Đã nhận yêu cầu và đang xử lý',
    },

    {
      name: 'Lý Thuỳ Linh',
      phone: '0903245394',
      address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
      conditon: 'Viêm gan A',
      status: 'Đã trả kết quả',
    }

  ]

  constructor() { }

  ngOnInit() {}

}
