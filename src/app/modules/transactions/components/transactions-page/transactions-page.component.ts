import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import { TransactionsService } from '../../services/transactions.service';
import {Transaction} from '../../types/transactions';

@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.scss']
})
export class TransactionsPageComponent implements OnInit {

  constructor(private transactionsService: TransactionsService) { }

  get transactions(): Transaction[] {
    return this.transactionsService.transactions;
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionsService.getTransactions();
  }
}
