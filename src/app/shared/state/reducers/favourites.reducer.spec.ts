import * as Actions from '../actions/favourites.actions';
import { gameMock } from '../../testing/search/game.mock';
import { favouritesReducer, initialFavouritesState, FavouritesFeatureState } from './favourites.reducer';

describe('unknown action', () => {
  it('should return the default state', () => {
    const action = { type: 'Unknown' };
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toBe(initialFavouritesState);
  });
});

describe('favourites actions', () => {
  it('should change state on load favourite list action', () => {
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: true,
      error: '',
    };

    const action = Actions.loadFavouriteListAction();
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on load favourite list success action', () => {
    const favourites = [ gameMock ];
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      favourites,
      isLoading: false,
    };

    const action = Actions.loadFavouriteListSuccessAction({ favourites });
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on load favourite list fail action', () => {
    const error = 'some error';
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: false,
      error,
    };

    const action = Actions.loadFavouriteListFailAction({ error });
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should add a game to state on add to favourites action', () => {
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      favourites: [...initialFavouritesState.favourites, gameMock],
      isLoading: true,
      error: '',
    };

    const action = Actions.addToFavouritesAction({ game: gameMock });
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should add a game to state with existing games on add to favourites action', () => {
    const existingGames = [ gameMock, gameMock ];
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      favourites: [...existingGames, gameMock],
      isLoading: true,
      error: '',
    };

    const action = Actions.addToFavouritesAction({ game: gameMock });
    const state = favouritesReducer({...initialFavouritesState, favourites: existingGames }, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on add to favourites success action', () => {
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: false,
    };

    const action = Actions.addToFavouritesSuccessAction();
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on add to favourites fail action', () => {
    const error = 'some error';
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: false,
      error,
    };

    const action = Actions.addToFavouritesFailAction({ error });
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on delete from favourites action', () => {
    const name = gameMock.name;
    const oldState = { ...initialFavouritesState, favourites: [gameMock] };
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      favourites: [],
      isLoading: true,
      error: '',
    };

    const action = Actions.deleteFromFavouritesAction({ name });
    const state = favouritesReducer(oldState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(oldState);
  });

  it('should change state on delete from favourites success action', () => {
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: false,
    };

    const action = Actions.deleteFromFavouritesSuccessAction();
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on delete from favourites fail action', () => {
    const error = 'some error';
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: false,
      error,
    };

    const action = Actions.deleteFromFavouritesFailAction({ error });
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

});
