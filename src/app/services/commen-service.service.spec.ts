import { TestBed } from '@angular/core/testing';

import { CommenServiceService } from './commen-service.service';

describe('CommenServiceService', () => {
  let service: CommenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
