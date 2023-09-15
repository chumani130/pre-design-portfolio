import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-bankapp',
  templateUrl: './bankapp.component.html',
})
export class BankappComponent {
  constructor(public modalRef: MdbModalRef<BankappComponent>) {}
}