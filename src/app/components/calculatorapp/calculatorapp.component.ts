import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-calculatorapp',
  templateUrl: './calculatorapp.component.html',
})
export class CalculatorappComponent {
  constructor(public modalRef: MdbModalRef<CalculatorappComponent>) {}
}