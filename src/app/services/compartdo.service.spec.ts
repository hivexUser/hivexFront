import { TestBed } from '@angular/core/testing';

import { CompartdoService } from './compartdo.service';

describe('CompartdoService', () => {
  let service: CompartdoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompartdoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
