import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class WalletService {
  constructor(private http: HttpClient) {

  }

  getWallet(): Observable<Wallet> {
    return this.http.get<DecoinResponse>('/wallet')
      .map(response => response.content.wallet);
  }

  send(to: string, amount: number) {
    return this.http.post('/transactions', {
      to,
      amount
    });
  }

  mine() {
    return this.http.post('/mine', null);
  }
}

export interface DecoinResponse {
  content: {
    [key: string]: any
  }
}

export interface Wallet {
  address: string;
  balance: number;
}
