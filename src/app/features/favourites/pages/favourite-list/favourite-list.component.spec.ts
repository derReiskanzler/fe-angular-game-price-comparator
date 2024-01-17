import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteListComponent } from './favourite-list.component';
import { GameListModule } from '../../../../shared/ui/game-list/game-list.module';
import { provideMockStore } from '@ngrx/store/testing';
import { initialFavouritesState } from '../../../../shared/state/reducers/favourites.reducer';
import { MessageService } from 'primeng/api';

describe('FavouriteListComponent', () => {
  let component: FavouriteListComponent;
  let fixture: ComponentFixture<FavouriteListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteListComponent],
      imports: [
        GameListModule,
      ],
      providers: [
        provideMockStore({ initialState: initialFavouritesState }),
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
