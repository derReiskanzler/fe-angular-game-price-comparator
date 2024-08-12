import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';
import { GameOsSupportedComponent } from '../game-os-supported/game-os-supported.component';
import { FavouriteIconComponent } from '../favourite-icon/favourite-icon.component';
import { NgFor } from '@angular/common';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgFor,
        GameComponent,
        GameOsSupportedComponent,
        FavouriteIconComponent,
      ]
    });
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
