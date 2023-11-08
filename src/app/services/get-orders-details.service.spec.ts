import { TestBed } from '@angular/core/testing';

import { GetOrdersDetailsService } from './get-orders-details.service';

describe('GetOrdersDetailsService', () => {
  let service: GetOrdersDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOrdersDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
