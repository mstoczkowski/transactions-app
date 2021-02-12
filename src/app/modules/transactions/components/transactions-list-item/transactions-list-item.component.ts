import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../types/transactions';

@Component({
  selector: 'app-transactions-list-item',
  templateUrl: './transactions-list-item.component.html',
  styleUrls: ['./transactions-list-item.component.scss']
})
export class TransactionsListItemComponent implements OnInit {
  @Input() item: Transaction;

  constructor() { }

  ngOnInit(): void {
  }

}
