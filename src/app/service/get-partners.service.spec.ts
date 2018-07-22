import { TestBed, inject } from '@angular/core/testing';

import { GetPartnersService } from './get-partners.service';

describe('GetPartnersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPartnersService]
    });
  });

  it('should be created', inject([GetPartnersService], (service: GetPartnersService) => {
    expect(service).toBeTruthy();
  }));
});
