import { TestBed } from '@angular/core/testing';

import { LinuxService } from './linux.service';

describe('LinuxService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinuxService = TestBed.get(LinuxService);
    expect(service).toBeTruthy();
  });
});
