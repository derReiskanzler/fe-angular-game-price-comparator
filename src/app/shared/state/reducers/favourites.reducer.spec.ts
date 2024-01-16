import * as Actions from '../actions/favourites.actions';
import { gameMock } from '../../testing/search/game.mock';
import { favouritesReducer, initialFavouritesState, FavouritesFeatureState } from './favourites.reducer';
import { favouriteMock } from '../../testing/favourites/favourite.mock';

describe('unknown action', () => {
  it('should return the default state', () => {
    const action = { type: 'Unknown' };
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toBe(initialFavouritesState);
  });
});

describe('favourites actions', () => {
  it('should change state on get favourite list action', () => {
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: true,
    };

    const action = Actions.getFavouriteListAction();
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on get favourite list success action', () => {
    const favourites = [ favouriteMock ];
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      favourites,
      isLoading: false,
    };

    const action = Actions.getFavouriteListSuccessAction({ favourites });
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on get favourite list fail action', () => {
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: false,
    };

    const action = Actions.getFavouriteListFailAction();
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on add to favourites action', () => {
    const dto = favouriteMock;
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      favourites: [dto],
      isLoading: true,
    };

    const action = Actions.addToFavouritesAction({ dto });
    const state = favouritesReducer(initialFavouritesState, action);

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
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: false,
    };

    const action = Actions.addToFavouritesFailAction();
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

  it('should change state on delete from favourites action', () => {
    const name = favouriteMock.name;
    const oldState = { ...initialFavouritesState, favourites: [favouriteMock] };
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      favourites: [],
      isLoading: true,
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
    const newState: FavouritesFeatureState = {
      ...initialFavouritesState,
      isLoading: false,
    };

    const action = Actions.deleteFromFavouritesFailAction();
    const state = favouritesReducer(initialFavouritesState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialFavouritesState);
  });

});
