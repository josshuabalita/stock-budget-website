import { TestBed } from '@angular/core/testing';

import { StockQuotesService } from './stock-quotes.service';

describe('StockQuotesService', () => {
  let service: StockQuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockQuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
