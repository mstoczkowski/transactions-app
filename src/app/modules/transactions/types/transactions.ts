export type TransactionDates = {
  valueDate: number | string;
};

export type TransactionMerchant = {
  accountNumber: string;
  name: string;
};

export type TransactionAmount = {
  amount: number | string;
  currencyCode: string;
};

export enum TransactionType {
  Salaries = 'Salaries',
  OnlineTransfer = 'Online Transfer',
  CardPayment = 'Card Payment',
  Transaction = 'Transaction',
}

export type TransactionDetails = {
  amountCurrency: TransactionAmount;
  creditDebitIndicator: string;
  type: string;
};


export type Transaction = {
  categoryCode: string;
  dates: TransactionDates;
  merchant: TransactionMerchant;
  transaction: TransactionDetails;
};

