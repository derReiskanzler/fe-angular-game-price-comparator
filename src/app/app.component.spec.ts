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
        AppComponent,
        HeaderComponent,
        RouterTestingModule,
      ],
      providers: [
        MessageService,
        provideMockStore({ initialState: initialSearchGameState }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
