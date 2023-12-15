import { TestBed } from '@angular/core/testing';

import { SearchGameWebService } from './search-game.web.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchGameWebService', () => {
  let service: SearchGameWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(SearchGameWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
