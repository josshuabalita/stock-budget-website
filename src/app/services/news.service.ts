import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class NewsService {
  private apiKey = 'csteu81r01qq1rur05ngcsteu81r01qq1rur05o0';
  private apiUrl = 'https://finnhub.io/api/v1/news?category=general';

  constructor(private http: HttpClient) {}

  getLatestNews(): Observable<any> {
    const params = {
      token: this.apiKey,
    };

    return this.http.get(this.apiUrl, { params }).pipe(
      map((response: any) => response.slice(0,10))
    );
  }
}
