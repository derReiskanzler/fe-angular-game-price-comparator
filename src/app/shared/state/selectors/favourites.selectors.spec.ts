import { favouritesFeatureStateMock } from '../../testing/favourites/favourites-feature-state.mock';
import * as Selectors from './favourites.selectors';

describe('Favourites Feature Selectors', () => {
    it('should select favourites', () => {
        const result = Selectors.selectFavourites.projector(favouritesFeatureStateMock);
    
        expect(result).toEqual(favouritesFeatureStateMock.favourites);
    });

    it('should select isLoading', () => {
        const result = Selectors.selectIsLoading.projector(favouritesFeatureStateMock);
    
        expect(result).toEqual(favouritesFeatureStateMock.isLoading);
    });

    it('should select error', () => {
        const result = Selectors.selectError.projector(favouritesFeatureStateMock);
    
        expect(result).toEqual(favouritesFeatureStateMock.error);
    });
});  