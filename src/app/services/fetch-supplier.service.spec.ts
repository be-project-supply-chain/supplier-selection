import { TestBed } from '@angular/core/testing';

import { FetchSupplierService } from './fetch-supplier.service';

describe('FetchSupplierService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchSupplierService = TestBed.get(FetchSupplierService);
    expect(service).toBeTruthy();
  });
});
