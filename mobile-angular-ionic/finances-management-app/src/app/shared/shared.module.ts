import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './components/wallet/wallet.component';
import { ShortNumberPipe } from './pipes/short-number.pipe';
import { CurrenciesService } from './services/currencies/currencies.service';
import { CurrencySymbolPipe } from './pipes/currency-symbol.pipe';

@NgModule({
  declarations: [WalletComponent, ShortNumberPipe, CurrencySymbolPipe],
  exports: [WalletComponent],
  imports: [CommonModule],
})
export class SharedModule {}
