import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class TransactionsService {
  constructor(private http: HttpClient) {

  }

  getTransactions(address: string): Observable<Transaction[]> {
    return this.http.get<DecoinResponse>(`/transactions/${address}`)
      .map(response => response.content.transactions);
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
