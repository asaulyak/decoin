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
  public wallet: Wallet = {
    address: '',
    balance: 0
  };

  constructor(private walletService: WalletService) {

  }

  ngOnInit() {
    this.walletService.getWallet()
      .subscribe(wallet => this.wallet = wallet);
  }
}
