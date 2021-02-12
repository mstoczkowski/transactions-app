import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {TransactionType} from '../../../modules/transactions/types/transactions';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnChanges {

  @Input() price: string | number;
  @Input() transactionType: string;
  @Input() currency: string;

  color: string;
  amount: string | number;

  ngOnChanges({ transactionType, price }: SimpleChanges): void {
    this.color = this.getColor(transactionType.currentValue);
    this.amount = this.getPrice(transactionType.currentValue, price.currentValue);
  }

  getColor(transactionType: string): string {
    return this.isIncome(transactionType) ? '#29a745' : '#dc3645';
  }

  getPrice(transactionType: string, price: string | number): string | number {
    return this.isIncome(transactionType) ? price : `-${price}`;
  }

  isIncome(transactionType: string): boolean {
    return transactionType === TransactionType.Salaries;
  }
}
