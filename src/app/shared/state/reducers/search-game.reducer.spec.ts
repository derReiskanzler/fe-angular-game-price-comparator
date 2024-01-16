import { SearchGameFeatureState, initialSearchGameState, searchGameReducer } from './search-game.reducer';
import * as Actions from '../actions/search-game.actions';
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

    const action = Actions.searchGameAction({ search });
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

    const action = Actions.searchGameSuccessAction({ results });
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

    const action = Actions.searchGameFailAction({ error });
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

    const action = Actions.resetSearchAction();
    const state = searchGameReducer(oldState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(oldState);
  });

  it('should select game on select game action', () => {
    const newState: SearchGameFeatureState = {
      ...initialSearchGameState,
      selectedGame: gameMock,
    };

    const action = Actions.selectGameAction({ game: gameMock });
    const state = searchGameReducer(initialSearchGameState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(initialSearchGameState);
  });

  it('should reset search on reset search action', () => {
    const oldState = { ...initialSearchGameState, selectedGame: {...gameMock, name: 'Some Title'} };
    const newState: SearchGameFeatureState = { ...initialSearchGameState };

    const action = Actions.resetSelectedGameAction();
    const state = searchGameReducer(oldState, action);

    expect(state).toEqual(newState);
    expect(state).not.toBe(oldState);
  });
});
