import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/favourites.actions';
import { gameMock } from '../../testing/search/game.mock';
import { Favourite } from '../../models/favourite.interface';

export const favouritesReducerKey = 'favourites';

export interface FavouritesFeatureState {
    favourites: Favourite[];
    isLoading: boolean;
}

export const initialFavouritesState: FavouritesFeatureState = {
    favourites: [
        { name: gameMock.name, steamId: 1, gogId: 1 },
        { name: gameMock.name, steamId: 1, gogId: 1 },
        { name: gameMock.name, steamId: 1, gogId: 1 },
        { name: gameMock.name, steamId: 1, gogId: 1 },
        { name: gameMock.name, steamId: 1, gogId: 1 },
        { name: gameMock.name, steamId: 1, gogId: 1 },
    ],
    isLoading: false,
};

export const favouritesReducer = createReducer(
    initialFavouritesState,
    on(Actions.getFavouriteListAction, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(Actions.getFavouriteListSuccessAction, (state, { favourites }) => ({
        ...state,
        favourites,
        isLoading: false,
    })),
    on(Actions.getFavouriteListFailAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(Actions.addToFavouritesAction, (state, { dto }) => ({
        ...state,
        favourites: state.favourites ? [...state.favourites] : [dto],
        isLoading: true,
    })),
    on(Actions.addToFavouritesSuccessAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(Actions.addToFavouritesFailAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(Actions.deleteFromFavouritesAction, (state, { name }) => ({
        ...state,
        favourites: [...state.favourites.filter(favourite => favourite.name !== name)],
        isLoading: true,
    })),
    on(Actions.deleteFromFavouritesSuccessAction, (state) => ({
        ...state,
        isLoading: false,
    })),
    on(Actions.deleteFromFavouritesFailAction, (state) => ({
        ...state,
        isLoading: false,
    })),
);