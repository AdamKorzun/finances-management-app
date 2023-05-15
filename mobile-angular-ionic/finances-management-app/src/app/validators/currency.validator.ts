import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CurrenciesService } from '../shared/services/currencies/currencies.service';
import { Currency } from '../models/currency';
@Injectable()
export class CurrencyValidator {
  constructor(private cs: CurrenciesService) {
    this.cs.fetchCurrencies().subscribe((c) => (this.currencies = c));
  }

  currencies: Currency[] = [];
  allowedCurrency(control: AbstractControl): ValidationErrors | null {
    if (!this.currencies.map((c) => c.code).includes(control.value)) {
      return { disallowedCurrency: true };
    }
    return null;
  }
}
