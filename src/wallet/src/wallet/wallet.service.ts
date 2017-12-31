import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../config';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()
export class WalletService {
  constructor(private http: HttpClient) {

  }

  getTransactions(address): Observable<Transaction[]> {
    return this.http.get<DecoinResponse>(`/transactions/${address}`)
      .map(response => response.content.transactions);
  }

  getWallet(): Observable<Wallet> {
    return this.http.get<DecoinResponse>('/wallet')
      .map(response => response.content.wallet);
  }
}

export interface DecoinResponse {
  content: {
    [key: string]: any
  }
}

export interface Transaction {
  from: string;
  to: string;
  amount: number;
}

export interface Wallet {
  address: string;
  balance: number;
}
