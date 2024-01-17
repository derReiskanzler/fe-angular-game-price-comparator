import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialSearchGameState } from '../../shared/state/reducers/search-game.reducer';
import { GameListModule } from '../../shared/ui/game-list/game-list.module';
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
        GameListModule,
        provideMockStore({ initialState: initialSearchGameState }),
        MessageService,
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
