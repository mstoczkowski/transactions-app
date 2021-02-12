import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import transactionsMock from '../../../shared/modules/bb-ui/mock-data/transactions.json';
import {Transaction, TransactionFormValues, TransactionType} from '../types/transactions';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  transactions: Transaction[] = [];

  sort(transactions: Transaction[]): Transaction[] {
    return transactions.sort((a, b) => {
      const aDate = moment(a.dates.valueDate);
      const bDate = moment(b.dates.valueDate);

      if (aDate < bDate) {
        return 11;
      } else if (aDate > bDate) {
        return -1;
      } else {
        return 0;
      }
    });
  }

  getTransactions(): void {
    this.http.get<Transaction[]>('/transactions')
      .pipe(
        map(this.sort),
        catchError((error: HttpErrorResponse) => {
          console.error('Something went wrong. Returned fallback response data', error);
          return of(this.sort(transactionsMock.data));
        })
      ).subscribe(transactions => (this.transactions = transactions));
  }

  addTransaction(data: TransactionFormValues): void {
    this.transactions = [
      {
        dates: {
          valueDate: moment().format('YYYY-MM-DD')
        },
        merchant: {
          accountNumber: data.accountNumber,
          name: data.toAccount
        },
        transaction: {
          amountCurrency: {
            currencyCode: data.currency,
            amount: data.amount
          },
          creditDebitIndicator: '',
          type: TransactionType.OnlineTransfer
        },
        categoryCode: '#e25a2c',
        },
      ...this.transactions
    ];
  };
}
