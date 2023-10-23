import { TestBed } from '@angular/core/testing';

import { CustomerSummaryService } from './customer-summary.service';

describe('CustomerSummaryService', () => {
  let service: CustomerSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
