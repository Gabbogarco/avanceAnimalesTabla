import { TestBed } from '@angular/core/testing';

import { EjemploservicioService } from './ejemploservicio.service';

describe('EjemploservicioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EjemploservicioService = TestBed.get(EjemploservicioService);
    expect(service).toBeTruthy();
  });
});
