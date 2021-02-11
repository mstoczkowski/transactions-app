import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-transfer-money-confirmation',
  templateUrl: './transfer-money-confirmation.component.html',
  styleUrls: ['./transfer-money-confirmation.component.scss']
})
export class TransferMoneyConfirmationComponent implements OnInit {
  title = 'Some title';
  amount: string;
  toAccount: string;
  currency: string;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.bsModalRef.hide();
  }

  sendTransfer(): void {
    // csda
  }

}
