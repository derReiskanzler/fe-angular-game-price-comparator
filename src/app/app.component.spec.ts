import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { initialSearchGameState } from './shared/state/reducers/search-game.reducer';
import { provideMockStore } from '@ngrx/store/testing';
import { HeaderComponent } from './features/header/header.component';
import { MessageService } from 'primeng/api';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterTestingModule,
        provideMockStore({ initialState: initialSearchGameState }),
      ],
      providers: [
        MessageService,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  // TODO: fix test
  it.skip('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
