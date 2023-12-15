import { TestBed } from '@angular/core/testing';
import { SearchGameFacadeService } from './search-game.facade.service';
import { SearchGameFeatureState, intialSearchGameState } from '../reducers/search-game.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as Actions from '../actions/search-game.actions';

describe('SearchGameFacadeService', () => {
  let facade: SearchGameFacadeService;
  let storeSpy: jest.SpyInstance;
  let store: MockStore<SearchGameFeatureState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: intialSearchGameState }),
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

    expect(storeSpy).toHaveBeenCalledWith(Actions.searchGameAction({ search }));
  });

  it('should dispatch a reset search action', () => {
    facade.resetSearch();

    expect(storeSpy).toHaveBeenCalledWith(Actions.resetSearchAction());
  });
});

