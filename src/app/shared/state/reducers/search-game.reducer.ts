import { createReducer, on } from '@ngrx/store';
import { Game, GameInfo, GamePrice } from '../../models/game.interface';
import * as SearchGameActions from '../actions/search-game.actions';
import * as FavouritesActions from '../actions/favourites.actions';
import { gameMock } from '../../testing/search/game.mock';

export const searchGameReducerKey = 'searchGame';

export interface SearchGameFeatureState {
    search: string;
    results: Game[];
    favourites: Game[];
    isLoading: boolean;
    selectedGame: Game;
    error: string;
}

export const initialSearchGameState: SearchGameFeatureState = {
    search: '',
    results: [
        // gameMock,
        // {...gameMock, name: 'Test', platforms: {windows: true, linux: true, mac: true} },
        // {...gameMock, steam: {...gameMock.steam, price: {...gameMock.steam?.price, isFree: true} as GamePrice} as GameInfo},
        // {...gameMock, steam: null},
        // {...gameMock, gog: null, isFavourite: true},
    ],
    favourites: [
        // gameMock,
    ],
    selectedGame: {
        // ...gameMock
    } as Game,
    isLoading: false,
    error: '',
};

export const searchGameReducer = createReducer(
    initialSearchGameState,
    on(SearchGameActions.searchGameAction, (state, { search }) => ({
        ...state,
        search,
        isLoading: true,
    })),
    on(SearchGameActions.searchGameSuccessAction, (state, { results }) => ({
        ...state,
        results,
        isLoading: false,
    })),
    on(SearchGameActions.searchGameFailAction, (state, { error }) => ({
        ...state,
        error,
        isLoading: false,
    })),
    on(SearchGameActions.resetSearchAction, (state, _action) => ({
        ...state,
        search: '',
        results: [],
    })),
    on(SearchGameActions.selectGameAction, (state, { game }) => ({
        ...state,
        selectedGame: game,
    })),
    on(SearchGameActions.resetSelectedGameAction, (state, _action) => ({
        ...state,
        selectedGame: {} as Game,
    })),
    // favourites
    on(FavouritesActions.loadFavouriteListAction, (state) => ({
        ...state,
        isLoading: true,
        error: '',
    })),
    on(FavouritesActions.loadFavouriteListSuccessAction, (state, { favourites }) => ({
        ...state,
        favourites,
        isLoading: false,
    })),
    on(FavouritesActions.loadFavouriteListFailAction, (state, { error }) => ({
        ...state,
        isLoading: false,
        error,
    })),
    on(FavouritesActions.addToFavouritesAction, (state, { game }) => ({
        ...state,
        error: '',
    })),
    on(FavouritesActions.addToFavouritesSuccessAction, (state, { game }) => ({
        ...state,
        results: [...state.results.map(result => result.name === game.name ? {...result, isFavourite: true} : result)],
        favourites: state.favourites ? addToFavourites(game, state.favourites) : [{...game, isFavourite: true}],
        selectedGame: state.selectedGame.name === game.name ? {...state.selectedGame, isFavourite: true} : state.selectedGame,
    })),
    on(FavouritesActions.addToFavouritesFailAction, (state, { error }) => ({
        ...state,
        error,
    })),
    on(FavouritesActions.deleteFromFavouritesAction, (state, { name }) => ({
        ...state,
        error: '',
    })),
    on(FavouritesActions.deleteFromFavouritesSuccessAction, (state, { name }) => ({
        ...state,
        results: [...state.results.map(result => result.name === name ? {...result, isFavourite: false} : result)],
        favourites: [...state.favourites.map(favourite => favourite.name === name ? {...favourite, isFavourite: false} : favourite)],
        selectedGame: state.selectedGame.name === name ? {...state.selectedGame, isFavourite: false } : state.selectedGame,
    })),
    on(FavouritesActions.deleteFromFavouritesFailAction, (state, { error }) => ({
        ...state,
        error,
    })),
);

function addToFavourites(game: Game, favourites: Game[]): Game[] {
    if (favourites.find(favourite => favourite.name === game.name)?.name) {
        return favourites.map(favourite => favourite.name === game.name ? {...favourite, isFavourite: true} : favourite);
    }
    return [...favourites, {...game, isFavourite: true}];
}