import { Component, OnInit } from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {TransactionsService} from '../../services/transactions.service';

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
  accountNumber: string;

  constructor(public bsModalRef: BsModalRef, private transactionService: TransactionsService) { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.bsModalRef.hide();
  }

  sendTransfer(): void {
    this.transactionService.addTransaction({
      toAccount: this.toAccount,
      currency: this.currency,
      amount: this.amount,
      accountNumber: this.accountNumber
    });
    this.closeModal();
  }

}
