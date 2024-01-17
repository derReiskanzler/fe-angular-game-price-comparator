import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/favourites.actions';
import { gameMock } from '../../testing/search/game.mock';
import { Game } from '../../models/game.interface';

export const favouritesReducerKey = 'favourites';

export interface FavouritesFeatureState {
    favourites: Game[];
    isLoading: boolean;
    error: string;
}

export const initialFavouritesState: FavouritesFeatureState = {
    favourites: [
        gameMock,
        gameMock,
        gameMock,
    ],
    isLoading: false,
    error: '',
};

export const favouritesReducer = createReducer(
    initialFavouritesState,
    on(Actions.loadFavouriteListAction, (state) => ({
        ...state,
        isLoading: true,
        error: '',
    })),
    on(Actions.loadFavouriteListSuccessAction, (state, { favourites }) => ({
        ...state,
        favourites,
        isLoading: false,
    })),
    on(Actions.loadFavouriteListFailAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(Actions.addToFavouritesAction, (state, { game }) => ({
        ...state,
        favourites: state.favourites ? [...state.favourites, game] : [game],
        isLoading: true,
        error: '',
    })),
    on(Actions.addToFavouritesSuccessAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(Actions.addToFavouritesFailAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(Actions.deleteFromFavouritesAction, (state, { name }) => ({
        ...state,
        favourites: [...state.favourites.filter(favourite => favourite.name !== name)],
        isLoading: true,
        error: '',
    })),
    on(Actions.deleteFromFavouritesSuccessAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(Actions.deleteFromFavouritesFailAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
);