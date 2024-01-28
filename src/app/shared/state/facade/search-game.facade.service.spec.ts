import { TestBed } from '@angular/core/testing';
import { SearchGameFacadeService } from './search-game.facade.service';
import { SearchGameFeatureState, initialSearchGameState } from '../reducers/search-game.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as SearchGameActions from '../actions/search-game.actions';
import * as FavouritesActions from '../actions/favourites.actions';
import { gameMock } from '../../testing/search/game.mock';

describe('SearchGameFacadeService', () => {
  let facade: SearchGameFacadeService;
  let storeSpy: jest.SpyInstance;
  let store: MockStore<SearchGameFeatureState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: initialSearchGameState }),
      ],
    });

    store = TestBed.inject(MockStore);
    facade = TestBed.inject(SearchGameFacadeService);
    storeSpy = jest.spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should dispatch a search game action', () => {
    const search = 'the witcher';
    facade.searchGame(search);

    expect(storeSpy).toHaveBeenCalledWith(SearchGameActions.searchGameAction({ search }));
  });

  it('should dispatch a reset search action', () => {
    facade.resetSearch();

    expect(storeSpy).toHaveBeenCalledWith(SearchGameActions.resetSearchAction());
  });

  it('should dispatch a select game action', () => {
    facade.selectGame(gameMock);

    expect(storeSpy).toHaveBeenCalledWith(SearchGameActions.selectGameAction({ game: gameMock }));
  });

  it('should dispatch a load favourite list action', () => {
    facade.getFavouriteList();

    expect(storeSpy).toHaveBeenCalledWith(FavouritesActions.loadFavouriteListAction());
  });

  it('should dispatch a add to favourite action', () => {
    facade.addToFavourite(gameMock);

    expect(storeSpy).toHaveBeenCalledWith(FavouritesActions.addToFavouritesAction({game: gameMock}));
  });

  it('should dispatch a select game action', () => {
    facade.deleteFromFavourites(gameMock.name);

    expect(storeSpy).toHaveBeenCalledWith(FavouritesActions.deleteFromFavouritesAction({ name: gameMock.name }));
  });
});

