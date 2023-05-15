import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})


export class ConfirmDialogComponent implements OnInit{
  @Input() title: string;
  @Input() message: string;


  constructor(private modalController: ModalController) {
    this.title = 'Tiêu đề';
    this.message = 'Nội dung'
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  dismiss(value: boolean) {
    this.modalController.dismiss(value);
  }
}
