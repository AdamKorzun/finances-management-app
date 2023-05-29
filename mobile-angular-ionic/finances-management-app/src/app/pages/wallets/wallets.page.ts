import { Component, OnInit } from '@angular/core';
import { WalletsService } from './services/wallets.service';
import { Wallet } from 'src/app/models/wallet';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.page.html',
  styleUrls: ['./wallets.page.scss'],
})
export class WalletsPage implements OnInit {
  wallets$: Observable<Wallet[]> = this.ws.fetchWallets();
  selectedWallet: Wallet | undefined;

  constructor(private ws: WalletsService) {}

  selectWallet(wallet: Wallet) {
    this.selectedWallet = wallet;
  }

  openModal() {}

  ngOnInit() {}
}
