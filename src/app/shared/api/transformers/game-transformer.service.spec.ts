import { TestBed } from '@angular/core/testing';

import { GameTransformerService } from './game-transformer.service';

describe('GameTransformerService', () => {
  let service: GameTransformerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO: write tests
});
