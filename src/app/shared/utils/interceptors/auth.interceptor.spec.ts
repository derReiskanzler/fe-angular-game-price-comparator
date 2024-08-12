import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';


describe('AuthInterceptor', () => {
  const localStorageMock = (function () {
    return {
      getItem() {
        return token;
      },
    };
  })();

  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const token = 'token';
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([AuthInterceptor])),
        provideHttpClientTesting(),
        { provide: localStorage, useValue: localStorageMock }
      ],
    })
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });

    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  
  afterEach(() => {
    httpTestingController.verify();
  });

  it('should add auth headers ', () => {
    const url = '/api/v1/auth/user';

    httpClient.get(url).subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.headers.get('Authorization')).toEqual(
      `Bearer ${token}`
    );
  });

  it('should not add auth headers ', () => {
    const url = '/some-endpoint';

    httpClient.get(url).subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.headers.get('Authorization')).toEqual(null);
  });
});
