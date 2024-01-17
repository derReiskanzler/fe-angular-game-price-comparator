import { SearchGameFeatureState, initialSearchGameState, searchGameReducer } from './search-game.reducer';
import * as SearchGameActions from '../actions/search-game.actions';
import * as FavouritesActions from '../actions/favourites.actions';
import { gameMock } from '../../testing/search/game.mock';

describe('unknown action', () => {
  it('should return the default state', () => {
    const action = { type: 'Unknown' };
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toBe(initialSearchGameState);
  });
});

describe('search actions', () => {
  it('should change state on search game action', () => {
    const search = 'baldurs gate 3';
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      search,
      isLoading: true,
    };

    const action = SearchGameActions.searchGameAction({ search });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should change state on search game success action', () => {
    const results = [ gameMock ];
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      results,
      isLoading: false,
    };

    const action = SearchGameActions.searchGameSuccessAction({ results });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should change state on search game fail action', () => {
    const error = 'error occurred';
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      error,
      isLoading: false,
    };

    const action = SearchGameActions.searchGameFailAction({ error });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should reset search on reset search action', () => {
    const oldState = { ...initialSearchGameState, search: 'some search' };
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      search: '',
    };

    const action = SearchGameActions.resetSearchAction();
    const state = searchGameReducer(oldState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(oldState);
  });

  it('should select game on select game action', () => {
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      selectedGame: gameMock,
    };

    const action = SearchGameActions.selectGameAction({ game: gameMock });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should reset search on reset search action', () => {
    const oldState = { ...initialSearchGameState, selectedGame: {...gameMock, name: 'Some Title'} };
    const newState: SearchGameFeatureState = { ...initialSearchGameState };

    const action = SearchGameActions.resetSelectedGameAction();
    const state = searchGameReducer(oldState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(oldState);
  });
});


describe('favourites actions', () => {
  it('should change state on load favourite list action', () => {
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      isLoading: true,
      error: '',
    };

    const action = FavouritesActions.loadFavouriteListAction();
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should change state on load favourite list success action', () => {
    const favourites = [ gameMock ];
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      favourites,
      isLoading: false,
    };

    const action = FavouritesActions.loadFavouriteListSuccessAction({ favourites });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should change state on load favourite list fail action', () => {
    const error = 'some error';
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      isLoading: false,
      error,
    };

    const action = FavouritesActions.loadFavouriteListFailAction({ error });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should add a game to state on add to favourites action', () => {
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      favourites: [...initialSearchGameState.favourites, gameMock],
      isLoading: true,
      error: '',
    };

    const action = FavouritesActions.addToFavouritesAction({ game: gameMock });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should add a game to state with existing games on add to favourites action', () => {
    const existingGames = [ gameMock, gameMock ];
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      favourites: [...existingGames, gameMock],
      isLoading: true,
      error: '',
    };

    const action = FavouritesActions.addToFavouritesAction({ game: gameMock });
    const state = searchGameReducer({...initialSearchGameState, favourites: existingGames }, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should change state on add to favourites success action', () => {
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      isLoading: false,
    };

    const action = FavouritesActions.addToFavouritesSuccessAction({ game: gameMock });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should change state on add to favourites fail action', () => {
    const error = 'some error';
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      isLoading: false,
      error,
    };

    const action = FavouritesActions.addToFavouritesFailAction({ error });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should change state on delete from favourites action', () => {
    const name = gameMock.name;
    const oldState = { ...initialSearchGameState, favourites: [gameMock] };
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      results: [],
      favourites: [],
      isLoading: true,
      error: '',
    };

    const action = FavouritesActions.deleteFromFavouritesAction({ name });
    const state = searchGameReducer(oldState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(oldState);
  });

  it('should change state on delete from favourites success action', () => {
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      isLoading: false,
    };

    const action = FavouritesActions.deleteFromFavouritesSuccessAction({ name: gameMock.name });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should change state on delete from favourites fail action', () => {
    const error = 'some error';
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      isLoading: false,
      error,
    };

    const action = FavouritesActions.deleteFromFavouritesFailAction({ error });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

});
