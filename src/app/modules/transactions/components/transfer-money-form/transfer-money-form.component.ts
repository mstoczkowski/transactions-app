import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {TransferMoneyConfirmationComponent} from '../transfer-money-confirmation/transfer-money-confirmation.component';
import {TransactionFormValues} from '../../types/transactions';
import {decimalRegex} from './validators';

@Component({
  selector: 'app-transfer-money-form',
  templateUrl: './transfer-money-form.component.html',
  styleUrls: ['./transfer-money-form.component.scss']
})
export class TransferMoneyFormComponent implements OnInit {
  bsModalRef: BsModalRef;
  accountNumber = '334543543543543534';
  currency = 'EUR';

  moneyTransferForm = new FormGroup({
    fromAccount: new FormControl({ value: 'DDD', disabled: true}),
    toAccount: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required, Validators.min(1)])
  });

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  getFormValue(): TransactionFormValues {
    const {toAccount, amount} = this.moneyTransferForm.getRawValue();
    return {
      toAccount: toAccount.target.value,
      amount: amount.target.value,
      accountNumber: this.accountNumber,
      currency: this.currency
    };
  }

  onFormSubmit(): void {
    if (this.moneyTransferForm.valid) {
      this.bsModalRef = this.modalService.show(TransferMoneyConfirmationComponent, {
        initialState: this.getFormValue()
      });
    }
  }

}
