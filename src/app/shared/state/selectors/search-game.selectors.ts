import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SearchGameFeatureState, searchGameReducerKey } from '../reducers/search-game.reducer';

export const selectSearchGameFeature = createFeatureSelector<SearchGameFeatureState>(searchGameReducerKey);

export const selectSearch = createSelector(
    selectSearchGameFeature,
    (state: SearchGameFeatureState) => state.search
);

export const selectResults = createSelector(
    selectSearchGameFeature,
    (state: SearchGameFeatureState) => state.results
);

export const selectIsLoading = createSelector(
    selectSearchGameFeature,
    (state: SearchGameFeatureState) => state.isLoading
);

export const selectSelectedGame = createSelector(
    selectSearchGameFeature,
    (state: SearchGameFeatureState) => state.selectedGame
);

export const selectError = createSelector(
    selectSearchGameFeature,
    (state: SearchGameFeatureState) => state.error
);

export const selectFavourites = createSelector(
    selectSearchGameFeature,
    (state: SearchGameFeatureState) => state.favourites
);
