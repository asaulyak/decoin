import {Component, OnInit} from '@angular/core';
import {Wallet, WalletService} from './wallet.service';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  public wallet: Wallet = {
    address: '',
    balance: 0
  };
  public amountToSend: number = 0;
  public receiver: string;

  constructor(private walletService: WalletService) {

  }

  ngOnInit() {
    this.walletService.getWallet()
      .subscribe(wallet => this.wallet = wallet);
  }

  onSendClick() {
    this.walletService.send(this.receiver, this.amountToSend)
      .subscribe();
  }

  onMineClick() {
    this.walletService.mine()
      .subscribe(() => window.location.reload());
  }
}
