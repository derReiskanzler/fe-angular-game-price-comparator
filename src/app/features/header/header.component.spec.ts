import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { intialSearchGameState } from '../../shared/state/reducers/search-game.reducer';
import { AuthModule } from '../../shared/ui/auth-dialog/auth.module';
import { AuthWebService } from '../../shared/api/services/auth/auth.web.service';
import { MockAuthWebService } from '../../shared/testing/auth/auth.web.service.mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        provideMockStore({ initialState: intialSearchGameState }),
        { provide: AuthWebService, useClass: MockAuthWebService },
      ],
      imports: [
        AuthModule,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
