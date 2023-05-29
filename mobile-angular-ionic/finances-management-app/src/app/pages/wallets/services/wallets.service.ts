import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/models/wallet';
import { ApiEndpoints } from 'src/environments/environment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WalletsService {
  constructor(private http: HttpClient) {}

  public fetchWallets(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(
      `${environment.baseUrl}${ApiEndpoints.wallets}`
    );
  }

  public createWallet(wallet: Wallet) {
    return this.http.post(
      `${environment.baseUrl}${ApiEndpoints.wallets}`,
      wallet
    );
  }
}
