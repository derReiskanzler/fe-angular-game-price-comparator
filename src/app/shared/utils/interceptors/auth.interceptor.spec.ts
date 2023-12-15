import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth.interceptor';
import { HttpClient, provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';


describe('AuthInterceptor', () => {
  // const localStorageMock = (function () {
  //   let store:any = {};
  
  //   return {
  //     getItem(key: string) {
  //       return token;
  //     },
  
  //     setItem(key:string, value: string) {
  //       store[key] = value;
  //     },
  
  //     clear() {
  //       store = {};
  //     },
  
  //     removeItem(key:string) {
  //       delete store[key];
  //     },
  
  //     getAll() {
  //       return store;
  //     },
  //   };
  // })();
  
  // Object.defineProperty(window, "localStorage", { value: localStorageMock });

  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  const token = 'token';
  // let store: any = {};
  // const mockLocalStorage = {
  //   getItem: (key: string): string|null => {
  //     return token;
  //   },
  // };

  beforeEach(() => {
      TestBed.configureTestingModule({
      providers: [
        provideHttpClient(withInterceptors([AuthInterceptor])),
        provideHttpClientTesting(),
        // { provide: localStorage, useValue: mockLocalStorage }
      ],
    })
    httpTestingController = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });
  
  afterEach(() => {
    httpTestingController.verify();
  });

  it.skip('should add auth headers ', () => {
    // jest.spyOn(localStorage, 'getItem').mockImplementation(mockLocalStorage.getItem);
    //arrange
    const url = '/mockendpoint';

    //act
    httpClient.get(url).subscribe();

    // assert
    const req = httpTestingController.expectOne(url);
    expect(req.request.headers.get('Authorization')).toEqual(
      `Bearer ${token}`
    );
  });
});
