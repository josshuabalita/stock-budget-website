import { Component, OnInit } from '@angular/core';
import { StockQuotesService } from '../../../../services/stock-quotes.service';
import { CommonModule } from '@angular/common';
import { sampleSize, shuffle } from 'lodash';
import { Subscription } from 'rxjs/internal/Subscription';
import { interval, switchMap, timer } from 'rxjs';

@Component({
  selector: 'app-top-gainers',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './top-gainers.component.html',
  styleUrl: './top-gainers.component.scss'
})

export class TopGainersComponent implements OnInit {
  stockQuotes: any[] = [];
  allSymbols: string[] = [];
  refreshSubscription!: Subscription;
  // countdown: number = 30; 

  constructor(private stockQuotesService: StockQuotesService) { }
  
  ngOnInit(): void {
    this.stockQuotesService.getAllSymbols().subscribe(symbols => {
      this.allSymbols = symbols.map((symbol: { symbol: any; }) => symbol.symbol); 
      this.startAutoRefresh();
      // this.startCountdown();
    });
  }

  startAutoRefresh() {
    this.refreshSubscription = timer(0, 30000)
      .pipe(
        switchMap(async () => this.loadRandomQuotes())
      )
      .subscribe();
  }

  loadRandomQuotes() {
    this.stockQuotes = []; 
    const randomSymbols = sampleSize(this.allSymbols, 10);
    randomSymbols.forEach((symbol: string) => {
      this.stockQuotesService.getQuote(symbol).subscribe(quote => {
        this.stockQuotes.push({ symbol: symbol, data: quote });
      });
    });
  }

  // startCountdown() {
  //   interval(1000).subscribe(() => {
  //     this.countdown--;
  //     if (this.countdown <= 0) {
  //       this.countdown = 30; // Reset the countdown
  //     }
  //   });
  // }

  ngOnDestroy() {
    this.refreshSubscription.unsubscribe();
  }
}


