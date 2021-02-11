import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-transfer-money-form',
  templateUrl: './transfer-money-form.component.html',
  styleUrls: ['./transfer-money-form.component.scss']
})
export class TransferMoneyFormComponent implements OnInit {

  moneyTransfer = new FormGroup({
    fromAccount: new FormControl({ value: 'DDD', disabled: true}),
    toAccount: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
  }

  onFormSubmit(): void {
    console.log('form submit', this.moneyTransfer, event);
  }

}
