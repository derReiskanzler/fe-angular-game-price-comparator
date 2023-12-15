import { createReducer, on } from '@ngrx/store';
import { Game } from '../../models/game.interface';
import * as Actions from '../actions/search-game.actions';

export const searchGameReducerKey = 'searchGame';

export interface SearchGameFeatureState {
    search: string;
    results: Game[];
    isLoading: boolean;
    error: string;
}

export const intialSearchGameState: SearchGameFeatureState = {
    search: '',
    results: [],
    isLoading: false,
    error: '',
};

export const searchGameReducer = createReducer(
    intialSearchGameState,
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
);