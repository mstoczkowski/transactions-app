import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../../shared/shared.module';
import { TransactionsPageComponent } from './components/transactions-page/transactions-page.component';
import { TransferMoneyFormComponent } from './components/transfer-money-form/transfer-money-form.component';

@NgModule({
  declarations: [TransactionsPageComponent, TransferMoneyFormComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TransactionsPageComponent
  ]
})
export class TransactionsModule { }
