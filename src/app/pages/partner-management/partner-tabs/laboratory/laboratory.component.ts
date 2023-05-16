import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormsModule } from '@angular/forms';
import { IsEmptyPipe } from 'src/app/pipes/is-empty.pipe';

@Component({
  selector: 'app-laboratory',
  templateUrl: './laboratory.component.html',
  styleUrls: ['./laboratory.component.scss'],
})
export class LaboratoryComponent implements OnInit {

  @ViewChild(IonModal) modal!: IonModal;


  titleModalAddPatient = 'Thêm yêu cầu'
  instructionModalPatient = 'Mời nhập thông tin bệnh nhân đầu tiên:'
  numberOfNewPatients = 0;
  isModalOpen = false;

  itemPatientFormModalLab = {
    name: '',
    phone: '',
    address: '',
    conditon: '',
    status: '',
    notes: '',
  }

  listPatientLab = [
    {
      name: '1234-1643 Trần Văn A',
      phone: '0981123574',
      address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
      conditon: 'Viêm loét dạ dày tá tràng',
      status: 'Chưa nhận yêu cầu',
      notes: '',
    },

    {
      name: '1234 - 2341 Trần Thị Lý',
      phone: '0234538592',
      address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
      conditon: 'Sốt xuất huyết',
      status: 'Đã nhận yêu cầu và đang xử lý',
      notes: '',
    },

    {
      name: '1234 - 1643 Lý Thuỳ Linh',
      phone: '0903245394',
      address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
      conditon: 'Viêm gan A',
      status: 'Đã trả kết quả',
      notes: '',
    }
  ];



  constructor() {
    this.listPatientLab = [
      {
        name: '1234-1643 Trần Văn A',
        phone: '0981123574',
        address: 'CT6 Khu đô thị Việt Hưng, Long Biên, Hà Nội',
        conditon: 'Viêm loét dạ dày tá tràng',
        status: 'Chưa nhận yêu cầu',
        notes: '',
      },

      {
        name: '1234 - 2341 Trần Thị Lý',
        phone: '0234538592',
        address: '257 Giải phóng, Hai Bà Trưng, Hà Nội',
        conditon: 'Sốt xuất huyết',
        status: 'Đã nhận yêu cầu và đang xử lý',
        notes: '',
      },

      {
        name: '1234 - 1643 Lý Thuỳ Linh',
        phone: '0903245394',
        address: '40 Phường Liệt, Thanh Xuân, Hà Nội',
        conditon: 'Viêm gan A',
        status: 'Đã trả kết quả',
        notes: '',
      }
    ];

  }

  ngOnInit() {

  }
  setOpenModalAddPatient(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  openModalPatientLab() {
    // Reset lại lời dẫn
    this.instructionModalPatient = 'Mời nhập thông tin bệnh nhân đầu tiên:'
    this.numberOfNewPatients = 0;

    this.setOpenModalAddPatient(true);
  }

  cancelModalAddPatient() {
    this.setOpenModalAddPatient(false);
    // this.modal.dismiss(null, 'cancel');
  }


  confirmPatientModal() {
    var isName = !this.isEmpty(this.itemPatientFormModalLab.name);
    var isPhone = !this.isEmpty(this.itemPatientFormModalLab.phone);
    var isAddress = !this.isEmpty(this.itemPatientFormModalLab.address);
    return (isName && isPhone && isAddress);
  }

  saveModalAddPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));

      // Reset form model lab
      this.resetFormModalPatient();

      // Đóng modal
      this.setOpenModalAddPatient(false);
    }

  }


  nextModalPatient() {
    if (this.confirmPatientModal()) {
      // Thêm mới một item Patient
      this.listPatientLab.push(JSON.parse(JSON.stringify(this.itemPatientFormModalLab)));

      // Thêm +1 bệnh nhân thành công. Tăng biến đếm số lượng bệnh nhân thêm mới thành công lên 1
      this.numberOfNewPatients++;

      // Thay đổ lời đầu modal kkhi thêm mới
      this.instructionModalPatient = `Đã thêm <strong>${this.numberOfNewPatients}</strong> bệnh nhân. Mời nhập thông tin bệnh nhân tiếp theo:`;

      // Reset form model lab
      this.resetFormModalPatient();
    };

  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {

    } else if (ev.detail.role === 'next') {

    }

  }
  resetFormModalPatient() {
    this.itemPatientFormModalLab = {
      name: '',
      phone: '',
      address: '',
      conditon: '',
      status: '',
      notes: '',
    }
  }

  isEmpty(value: any) {
    return new IsEmptyPipe().transform(value);
  }
}
