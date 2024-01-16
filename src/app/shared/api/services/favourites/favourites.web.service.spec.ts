import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FavouriteWebService } from './favourites.web.service';

describe('FavouriteWebService', () => {
  let service: FavouriteWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(FavouriteWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
