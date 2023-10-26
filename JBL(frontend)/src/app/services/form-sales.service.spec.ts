import { TestBed } from '@angular/core/testing';

import { FormSalesService } from './form-sales.service';

describe('FormSalesService', () => {
  let service: FormSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
