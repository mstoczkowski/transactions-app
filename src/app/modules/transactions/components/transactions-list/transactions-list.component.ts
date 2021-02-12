import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../types/transactions';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

  @Input() transactions: Transaction[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
