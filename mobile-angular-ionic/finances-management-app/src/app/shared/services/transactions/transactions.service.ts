import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TransactionFilters } from 'src/app/enums/transactionFilters';
import { Transaction, TransactionRequest } from 'src/app/models/transaction';
import { TransactionCategory } from 'src/app/models/transactionCategory';
import { ApiEndpoints, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  constructor(private http: HttpClient) {}

  fetchTransactions(filter: TransactionFilters): Observable<Transaction[]> {
    let httpParams: HttpParams = new HttpParams();
    if (filter !== TransactionFilters.All) {
      httpParams = httpParams.append('type', filter.toLowerCase());
    }
    return this.http
      .get<TransactionRequest>(
        `${environment.baseUrl}${ApiEndpoints.transactions}`,
        { params: httpParams }
      )
      .pipe(map((tr) => tr.results));
  }

  fetchCategories(): Observable<TransactionCategory[]> {
    return this.http.get<TransactionCategory[]>(
      `${environment.baseUrl}${ApiEndpoints.transactionCategories}`
    );
  }
}
