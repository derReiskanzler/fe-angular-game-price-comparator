import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AuthWebService } from '../../api/services/auth/auth.web.service';
import { MockAuthWebService } from '../../testing/auth/auth.web.service.mock';
import { MessageService } from 'primeng/api';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: AuthWebService, useClass: MockAuthWebService },
        MessageService,
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO: write tests
});
