import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsComponent } from './game-details.component';
import { initialSearchGameState } from '../../shared/state/reducers/search-game.reducer';
import { provideMockStore } from '@ngrx/store/testing';

describe('GameDetailsComponent', () => {
  let component: GameDetailsComponent;
  let fixture: ComponentFixture<GameDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDetailsComponent],
      providers: [
        provideMockStore({ initialState: initialSearchGameState }),
      ],
    });
    fixture = TestBed.createComponent(GameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
