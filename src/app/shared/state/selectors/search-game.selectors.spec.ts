import { searchGameFeatureStateMock } from '../../testing/search/search-game-feature-state.mock';
import * as Selectors from './search-game.selectors';

describe('Search Feature Selectors', () => {
    it('should select search string', () => {
        const result = Selectors.selectSearch.projector(searchGameFeatureStateMock);

        expect(result).toEqual(searchGameFeatureStateMock.search);
    });

    it('should select results', () => {
        const result = Selectors.selectResults.projector(searchGameFeatureStateMock);
    
        expect(result).toEqual(searchGameFeatureStateMock.results);
    });


    it('should select isLoading', () => {
        const result = Selectors.selectIsLoading.projector(searchGameFeatureStateMock);
    
        expect(result).toEqual(searchGameFeatureStateMock.isLoading);
    });

    it('should select error', () => {
        const result = Selectors.selectError.projector(searchGameFeatureStateMock);
    
        expect(result).toEqual(searchGameFeatureStateMock.error);
    });

    it('should select selected game', () => {
        const result = Selectors.selectSelectedGame.projector(searchGameFeatureStateMock);
    
        expect(result).toEqual(searchGameFeatureStateMock.selectedGame);
    });

    it('should select favourites', () => {
        const result = Selectors.selectFavourites.projector(searchGameFeatureStateMock);
    
        expect(result).toEqual(searchGameFeatureStateMock.favourites);
    });
});  