import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent  implements OnInit {
  listNotifi : any[]=  []
  constructor() { }

  ngOnInit() {
    this.listNotifi = [
      {
        title: 'Tình trạng đơn hàng',
        content: "Bệnh nhân Nguyễn Văn Â đã có kết quả xét nghiệm gồm <u><i>5 chỉ thị</i></u> đã có kết quả xét nghiệm là 2.345.00đ. Bạn đã nhận được phí tư vấn chưa?",
        time: new Date(),
      },
      {
        title: 'Tình trạng đơn hàng',
        content: "Invivolab đã tới lấy mẫu xét nghiệm của bệnh nhân Trần Thị Lý bao gồm <u><i>7 chỉ định</i></u>. Kết quả xét nghiệm của bệnh nhân Trần Thị Lý sẽ có sau khoảng 6h.",
        time: new Date(),
      },
      {
        title: 'Chương trình khuyến mãi',
        content: "Invivo Lab đang triển khai chương trình ưu đãi nhân ngày Gia Đình. Gói xét nghiệm to",
        time: new Date(),
      },
      {
        title: 'Tình trạng đơn hàng',
        content: "Bệnh nhân Đỗ Phương Thảo đã có kết quả xét nghiệm gồm 3 chỉ định. Tỗng số tiền xét nghiệm là 765000đ. Bạn đã nhận được phí tư vấn chưa?",
        time: new Date(),
      }
    ]
  }

}
