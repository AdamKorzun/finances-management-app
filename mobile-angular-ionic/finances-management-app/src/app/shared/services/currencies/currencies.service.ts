import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Currency } from 'src/app/models/currency';
import { ApiEndpoints, environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  constructor(private http: HttpClient) {}

  public fetchCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(
      `${environment.baseUrl}${ApiEndpoints.currencies}`
    );
  }
}
