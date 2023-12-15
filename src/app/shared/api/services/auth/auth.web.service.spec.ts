import { TestBed } from '@angular/core/testing';

import { AuthWebService } from './auth.web.service';

describe('AuthWebService', () => {
  let service: AuthWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
