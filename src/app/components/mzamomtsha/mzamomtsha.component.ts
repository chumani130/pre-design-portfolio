import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-mzamomtsha',
  templateUrl: './mzamomtsha.component.html',
})
export class MzamomtshaComponent {
  constructor(public modalRef: MdbModalRef<MzamomtshaComponent>) {}
}