import { favouritesFeatureStateMock } from '../../testing/favourites/favourites-feature-state.mock';
import { searchGameFeatureStateMock } from '../../testing/search/search-game-feature-state.mock';
import * as Selectors from './favourites.selectors';

describe('Favourites Feature Selectors', () => {
    it('should select favourites', () => {
        const result = Selectors.selectFavourites.projector(favouritesFeatureStateMock);
    
        expect(result).toEqual(searchGameFeatureStateMock.results);
    });

    it('should select isLoading', () => {
        const result = Selectors.selectIsLoading.projector(favouritesFeatureStateMock);
    
        expect(result).toEqual(searchGameFeatureStateMock.isLoading);
    });
});  