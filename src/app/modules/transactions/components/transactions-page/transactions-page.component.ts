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
  transactions: Transaction[];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): Subscription {
    return this.transactionsService
      .getTransactions()
      .subscribe(transactions => (this.transactions = transactions));
  }
}
