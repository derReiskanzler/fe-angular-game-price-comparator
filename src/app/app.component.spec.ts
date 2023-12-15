import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { intialSearchGameState } from './shared/state/reducers/search-game.reducer';
import { provideMockStore } from '@ngrx/store/testing';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HeaderModule,
        provideMockStore({ initialState: intialSearchGameState }),
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
