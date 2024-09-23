import { TestBed } from '@angular/core/testing';

import { DifusionService } from './difusion.service';

describe('DifusionService', () => {
  let service: DifusionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DifusionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
