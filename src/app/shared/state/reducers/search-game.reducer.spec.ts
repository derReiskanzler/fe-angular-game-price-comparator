import { SearchGameFeatureState, intialSearchGameState, searchGameReducer } from './search-game.reducer';
import * as Actions from '../actions/search-game.actions';
import { gameMock } from '../../testing/search/game.mock';

describe('unknown action', () => {
  it('should return the default state', () => {
    const action = { type: 'Unknown' };
    const state = searchGameReducer(intialSearchGameState, action);

    expect(state).toBe(intialSearchGameState);
  });
});

describe('search actions', () => {
  it('should change state on search game action', () => {
    const search = 'baldurs gate 3';
    const newState: SearchGameFeatureState = {
      ...intialSearchGameState,
      search,
      isLoading: true,
    };

    const action = Actions.searchGameAction({ search });
    const state = searchGameReducer(intialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(intialSearchGameState);
  });

  it('should change state on search game success action', () => {
    const results = [ gameMock ];
    const newState: SearchGameFeatureState = {
      ...intialSearchGameState,
      results,
      isLoading: false,
    };

    const action = Actions.searchGameSuccessAction({ results });
    const state = searchGameReducer(intialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(intialSearchGameState);
  });

  it('should change state on search game fail action', () => {
    const error = 'error occurred';
    const newState: SearchGameFeatureState = {
      ...intialSearchGameState,
      error,
      isLoading: false,
    };

    const action = Actions.searchGameFailAction({ error });
    const state = searchGameReducer(intialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(intialSearchGameState);
  });

  it('should reset search on reset search action', () => {
    const oldState = { ...intialSearchGameState, search: 'some search' };
    const newState: SearchGameFeatureState = {
      ...intialSearchGameState,
      search: '',
    };

    const action = Actions.resetSearchAction();
    const state = searchGameReducer(oldState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(oldState);
  });

  it('should select game on select game action', () => {
    const newState: SearchGameFeatureState = {
      ...intialSearchGameState,
      selectedGame: gameMock,
    };

    const action = Actions.selectGameAction({ game: gameMock });
    const state = searchGameReducer(intialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(intialSearchGameState);
  });

  it('should reset search on reset search action', () => {
    const oldState = { ...intialSearchGameState, selectedGame: {...gameMock, name: 'Some Title'} };
    const newState: SearchGameFeatureState = { ...intialSearchGameState };

    const action = Actions.resetSelectedGameAction();
    const state = searchGameReducer(oldState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(oldState);
  });
});
