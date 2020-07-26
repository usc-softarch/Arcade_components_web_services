import { TestBed } from '@angular/core/testing';

import { MalletService } from './mallet.service';

describe('MalletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalletService = TestBed.get(MalletService);
    expect(service).toBeTruthy();
  });
});
