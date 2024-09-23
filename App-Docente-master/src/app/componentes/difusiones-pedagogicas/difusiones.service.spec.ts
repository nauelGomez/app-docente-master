import { TestBed } from '@angular/core/testing';

import { DifusionesService } from './difusiones.service';

describe('DifusionesService', () => {
  let service: DifusionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DifusionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
