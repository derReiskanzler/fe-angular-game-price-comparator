import { TestBed } from '@angular/core/testing';
import { FavouriteWebService } from '../../api/services/favourites/favourites.web.service';
import { FavouriteService } from './favourites.service';
import { MockFavouriteWebService } from '../../testing/favourites/favourites.web.service.mock';


describe('FavouriteService', () => {
  let service: FavouriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: FavouriteWebService, useClass: MockFavouriteWebService },
      ],
    });
    service = TestBed.inject(FavouriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO: write tests
});
