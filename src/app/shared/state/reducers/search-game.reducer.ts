import { createReducer, on } from '@ngrx/store';
import { Game } from '../../models/game.interface';
import * as Actions from '../actions/search-game.actions';
import { gameMock } from '../../testing/search/game.mock';

export const searchGameReducerKey = 'searchGame';

export interface SearchGameFeatureState {
    search: string;
    results: Game[];
    isLoading: boolean;
    selectedGame: Game;
    error: string;
}

export const initialSearchGameState: SearchGameFeatureState = {
    search: '',
    results: [
        // gameMock
    ],
    // selectedGame: gameMock,
    selectedGame: {} as Game,
    isLoading: false,
    error: '',
};

export const searchGameReducer = createReducer(
    initialSearchGameState,
    on(Actions.searchGameAction, (state, { search }) => ({
        ...state,
        search,
        isLoading: true,
    })),
    on(Actions.searchGameSuccessAction, (state, { results }) => ({
        ...state,
        results,
        isLoading: false,
    })),
    on(Actions.searchGameFailAction, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
    })),
    on(Actions.resetSearchAction, (state, _action) => ({
        ...state,
        search: '',
    })),
    on(Actions.selectGameAction, (state, { game }) => ({
        ...state,
        selectedGame: game,
    })),
    on(Actions.resetSelectedGameAction, (state, _action) => ({
        ...state,
        selectedGame: {} as Game,
    })),
);