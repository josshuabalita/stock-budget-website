import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormat]',
  standalone: true
})
export class CurrenyFormatDirective {
  @Input('appCurrencyFormat') amount: number | undefined; 

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.formatCurrency();
  }

  private formatCurrency(): void {
    const amountToFormat = this.amount ?? 0;
    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amountToFormat);

    this.el.nativeElement.textContent = formattedAmount;
  }
}
