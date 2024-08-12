import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialSearchGameState } from '../../shared/state/reducers/search-game.reducer';
import { GameListComponent } from '../../shared/ui/game-list/game-list.component';
import { MessageService } from 'primeng/api';
import { AsyncPipe, NgIf } from '@angular/common';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NgIf, AsyncPipe,
        HomeComponent,
        GameListComponent,
      ],
      providers: [
        MessageService,
        provideMockStore({ initialState: initialSearchGameState }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
