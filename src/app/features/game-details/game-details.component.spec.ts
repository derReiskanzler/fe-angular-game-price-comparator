import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDetailsComponent } from './game-details.component';
import { initialSearchGameState } from '../../shared/state/reducers/search-game.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { NgIf, AsyncPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { GameOsSupportedComponent } from '../../shared/ui/game-os-supported/game-os-supported.component';
import { GameProviderDetailsComponent } from '../../shared/ui/game-provider-details/game-provider-details.component';

describe('GameDetailsComponent', () => {
  let component: GameDetailsComponent;
  let fixture: ComponentFixture<GameDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgIf, AsyncPipe,
        TabViewModule,
        ButtonModule,
        GameProviderDetailsComponent,
        GameOsSupportedComponent,
        GameDetailsComponent,
        provideMockStore({ initialState: initialSearchGameState }),
        
      ],
    });
    fixture = TestBed.createComponent(GameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it.skip('should create', () => {
    expect(component).toBeTruthy();
  });
});
