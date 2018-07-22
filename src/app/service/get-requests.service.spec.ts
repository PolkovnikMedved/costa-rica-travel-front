import { TestBed, inject } from '@angular/core/testing';

import { GetRequestsService } from './get-requests.service';

describe('GetRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetRequestsService]
    });
  });

  it('should be created', inject([GetRequestsService], (service: GetRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
