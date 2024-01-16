import { FavouritesFeatureState } from '../../state/reducers/favourites.reducer';
import { favouriteMock } from './favourite.mock';

export const favouritesFeatureStateMock: FavouritesFeatureState = {
  favourites: [ favouriteMock ],
  isLoading: false,
};

