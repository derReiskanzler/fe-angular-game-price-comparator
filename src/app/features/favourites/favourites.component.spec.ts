import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteListComponent } from './favourites.component';
import { GameListModule } from '../../shared/ui/game-list/game-list.module';
import { provideMockStore } from '@ngrx/store/testing';
import { MessageService } from 'primeng/api';
import { initialSearchGameState } from '../../shared/state/reducers/search-game.reducer';
import { NgIf, AsyncPipe } from '@angular/common';

describe('FavouriteListComponent', () => {
  let component: FavouriteListComponent;
  let fixture: ComponentFixture<FavouriteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgIf,
        AsyncPipe,
        FavouriteListComponent,
        GameListModule,
        provideMockStore({ initialState: initialSearchGameState }),
        MessageService,
      ],
    });
    fixture = TestBed.createComponent(FavouriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
