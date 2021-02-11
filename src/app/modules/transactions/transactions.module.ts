import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import {SharedModule} from '../../shared/shared.module';
import { TransactionsPageComponent } from './components/transactions-page/transactions-page.component';
import { TransferMoneyFormComponent } from './components/transfer-money-form/transfer-money-form.component';
import { TransferMoneyConfirmationComponent } from './components/transfer-money-confirmation/transfer-money-confirmation.component';

@NgModule({
  declarations: [TransactionsPageComponent, TransferMoneyFormComponent, TransferMoneyConfirmationComponent],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    TransactionsPageComponent
  ]
})
export class TransactionsModule { }
