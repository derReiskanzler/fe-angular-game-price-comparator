import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialSearchGameState } from '../../../../shared/state/reducers/search-game.reducer';
import { GameListModule } from '../../../../shared/ui/game-list/game-list.module';
import { MessageService } from 'primeng/api';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [
        GameListModule,
      ],
      providers: [
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
