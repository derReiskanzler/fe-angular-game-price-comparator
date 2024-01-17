import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as Actions from '../actions/favourites.actions';
import { FavouritesFacadeService } from './favourites.facade.service';
import { FavouritesFeatureState, initialFavouritesState } from '../reducers/favourites.reducer';
import { gameMock } from '../../testing/search/game.mock';

describe('FavouritesFacadeService', () => {
  let facade: FavouritesFacadeService;
  let storeSpy: jest.SpyInstance;
  let store: MockStore<FavouritesFeatureState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: initialFavouritesState }),
      ],
    });

    store = TestBed.inject(MockStore);
    facade = TestBed.inject(FavouritesFacadeService);
    storeSpy = jest.spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should dispatch a load favourite list action', () => {
    facade.getFavouriteList();

    expect(storeSpy).toHaveBeenCalledWith(Actions.loadFavouriteListAction());
  });

  it('should dispatch a add to favourite action', () => {
    facade.addToFavourite(gameMock);

    expect(storeSpy).toHaveBeenCalledWith(Actions.addToFavouritesAction({game: gameMock}));
  });

  it('should dispatch a select game action', () => {
    facade.deleteFromFavourites(gameMock.name);

    expect(storeSpy).toHaveBeenCalledWith(Actions.deleteFromFavouritesAction({ name: gameMock.name }));
  });
});

