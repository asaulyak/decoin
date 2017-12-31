import {Component, Input, OnInit} from '@angular/core';
import 'rxjs/add/operator/mergeMap';
import {Transaction, TransactionsService} from "./transactions.service";

@Component({
  selector: 'transactions',
  templateUrl: './transactions.component.html'
})
export class TransactionsComponent implements OnInit {
  public transactions: Transaction[];

  @Input()
  public walletAddress: string;

  constructor(private transactionsService: TransactionsService) {

  }

  ngOnInit() {
    this.transactionsService.getTransactions(this.walletAddress)
      .subscribe(transactions => {
        this.transactions = transactions
      });
  }
}
