import { FavouritesFeatureState } from '../../state/reducers/favourites.reducer';
import { gameMock } from '../search/game.mock';

export const favouritesFeatureStateMock: FavouritesFeatureState = {
  favourites: [ gameMock ],
  isLoading: false,
  error: '',
};

