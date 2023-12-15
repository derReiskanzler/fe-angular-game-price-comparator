import { TestBed } from '@angular/core/testing';

import { SearchGameService } from './search-game.service';
import { SearchGameWebService } from '../../api/services/search-game/search-game.web.service';
import { MockSearchGameWebService } from '../../testing/search/search-game.web.service.mock';

describe('SearchGameService', () => {
  let service: SearchGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SearchGameWebService, useClass: MockSearchGameWebService },
      ],
    });
    service = TestBed.inject(SearchGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO: write tests
});
