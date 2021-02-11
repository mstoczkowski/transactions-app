import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {TransferMoneyConfirmationComponent} from '../transfer-money-confirmation/transfer-money-confirmation.component';

@Component({
  selector: 'app-transfer-money-form',
  templateUrl: './transfer-money-form.component.html',
  styleUrls: ['./transfer-money-form.component.scss']
})
export class TransferMoneyFormComponent implements OnInit {
  bsModalRef: BsModalRef;
  moneyTransfer = new FormGroup({
    fromAccount: new FormControl({ value: 'DDD', disabled: true}),
    toAccount: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
  });

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    this.bsModalRef = this.modalService.show(TransferMoneyConfirmationComponent, {
      initialState: {
        toAccount: 'sdasfdsfs',
        amount: '231321',
        currency: '&euro;'
      }
    });
    // console.log('form submit', this.moneyTransfer, event);
  }

}
