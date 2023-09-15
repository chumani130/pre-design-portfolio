import { Component } from '@angular/core';
import { BankappComponent } from '../bankapp/bankapp.component';
import { CalculatorappComponent } from '../calculatorapp/calculatorapp.component';
import { MzamomtshaComponent } from '../mzamomtsha/mzamomtsha.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  modalRef: MdbModalRef<BankappComponent> | null = null;
  modalRef1: MdbModalRef<CalculatorappComponent> | null = null;
  modalRef2: MdbModalRef<MzamomtshaComponent> | null = null;

  constructor(private modalService: MdbModalService){ }
  openBankModal() {
    this.modalRef = this.modalService.open(BankappComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }
  openCalculatorModal() {
    this.modalRef = this.modalService.open(CalculatorappComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }
  openMzamomtshaModal() {
    this.modalRef = this.modalService.open(MzamomtshaComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }
}
