import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavouritesFeatureState, favouritesReducerKey } from '../reducers/favourites.reducer';

export const selectFavouritesFeature = createFeatureSelector<FavouritesFeatureState>(favouritesReducerKey);

export const selectFavourites = createSelector(
    selectFavouritesFeature,
    (state: FavouritesFeatureState) => state.favourites
);

export const selectIsLoading = createSelector(
    selectFavouritesFeature,
    (state: FavouritesFeatureState) => state.isLoading
);

export const selectError = createSelector(
    selectFavouritesFeature,
    (state: FavouritesFeatureState) => state.error
);

