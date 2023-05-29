import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './components/wallet/wallet.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';
import { MatIconModule } from '@angular/material/icon';
import { TransactionComponent } from './components/transaction/transaction.component';

@NgModule({
  declarations: [
    WalletComponent,
    ShortNumberPipe,
    CurrencySymbolPipe,
    TransactionComponent,
  ],
  exports: [WalletComponent, TransactionComponent],
  imports: [CommonModule, MatIconModule],
})
export class SharedModule {}
