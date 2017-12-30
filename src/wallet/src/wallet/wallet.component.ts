import {Component, OnInit} from '@angular/core';
import {Transaction, Wallet, WalletService} from './wallet.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  public transactions: Transaction[];
  public balance: number = 0;
  public wallet: Wallet;

  constructor(private walletService: WalletService) {

  }

  ngOnInit() {
    this.walletService.getWallet()
      .flatMap(wallet => {
        this.wallet = wallet;

        return this.walletService.getTransactions();
      })
      .subscribe(transactions => {
        this.transactions = transactions;
        this.balance = this.transactions
          .reduce((previous, current) => {
            if (current.from === this.wallet.id) {
              previous -= current.amount;
            }
            else if (current.to === this.wallet.id) {
              previous += current.amount;
            }

            return previous;
          }, 0);
      });
  }
}
