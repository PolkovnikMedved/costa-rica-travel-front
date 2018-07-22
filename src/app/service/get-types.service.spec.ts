import { TestBed, inject } from '@angular/core/testing';

import { GetTypesService } from './get-types.service';

describe('GetTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTypesService]
    });
  });

  it('should be created', inject([GetTypesService], (service: GetTypesService) => {
    expect(service).toBeTruthy();
  }));
});
