import { SearchGameFeatureState } from '../../state/reducers/search-game.reducer';
import { gameMock } from './game.mock';

export const searchGameFeatureStateMock: SearchGameFeatureState = {
  search: 'the witcher',
  results: [
    gameMock,
  ],
  favourites: [ gameMock ],
  isLoading: false,
  error: 'error',
  selectedGame: gameMock,
};

