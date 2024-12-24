import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StockQuotesService {
  private apiKey = 'csteu81r01qq1rur05ngcsteu81r01qq1rur05o0';
  private apiUrl = `https://finnhub.io/api/v1/`;

  constructor(private http: HttpClient) { }
  
  getQuote(symbol: string): Observable<any> {
    return this.http.get(`${this.apiUrl}quote?symbol=${symbol}&token=${this.apiKey}`);
  }

  getAllSymbols(): Observable<any> {
    return this.http.get(`${this.apiUrl}stock/symbol?exchange=US&token=${this.apiKey}`);
  }
}
