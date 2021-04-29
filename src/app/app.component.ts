import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  from: {currency: string; amount: number} = {currency: this.baseCurrency, amount: 1};
  to: {currency: string; amount: number} = {currency: 'PHP', amount: 0};
  symbols: Array<{key: string, value: string}> = [];
  currencies: Array<{currency: string; amount: number}> = [];
  referenceValue: number;

  constructor(
    private service: AppService,
  ) {
  }

  ngOnInit(): void {
    this.getSymbols();
    this.getCurrency();
  }

  get baseCurrency(): string {
    return 'EUR'; // this is the base currency of API since I am using limited access only
  }

  getSymbols(): void {
    this.service.getSymbols()
      .subscribe(symbols => {
        this.symbols = this.getFromKeys(symbols, 'key', 'value');
      });
  }

  getCurrency(): void {
    this.service.getCurrency()
      .subscribe(data => {
        if (data) {
          this.currencies = this.getFromKeys(data, 'currency', 'amount');
          this.updateFromCurrency();
        }
      });
  }

  updateFromCurrency(): void {
    this.to.amount = this.compute(this.from, this.to);
  }

  updateToCurrency(): void {
    this.from.amount = this.compute(this.to, this.from);
  }

  keyPressNumbersDecimal(event: KeyboardEvent): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    return true;
  }

  private compute(fromValue: any, toValue: any): number {
    const multiplier = this.currencies.find(f => f.currency === toValue.currency);
    const base = this.currencies.find(f => f.currency === this.baseCurrency);
    const from = this.currencies.find(f => f.currency === fromValue.currency);
    this.referenceValue = (base.amount / from.amount) * multiplier.amount;
    return +(this.referenceValue * fromValue.amount).toFixed(2);
  }

  private getFromKeys(data: any, propertyKey: string, propertyValue: any): any[] {
    const response = [];
    Object.keys(data).forEach(key => {
      response.push({ [propertyKey]: key, [propertyValue]: data[key] });
    })
    return response;
  }

}
