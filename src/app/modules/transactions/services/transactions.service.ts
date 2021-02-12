import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

import transactionsMock from '../../../shared/modules/bb-ui/mock-data/transactions.json';
import { Transaction } from '../types/transactions';
import moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

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

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>('/transactions')
      .pipe(
        map(this.sort),
        catchError((error: HttpErrorResponse) => {
          console.error('Something went wrong. Returned fallback response data', error);
          return of(this.sort(transactionsMock.data));
        })
      );
  }
}
