import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialSearchGameState } from '../../shared/state/reducers/search-game.reducer';
import { AuthModule } from '../../shared/ui/auth/auth.module';
import { AuthWebService } from '../../shared/api/services/auth/auth.web.service';
import { MockAuthWebService } from '../../shared/testing/auth/auth.web.service.mock';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: initialSearchGameState }),
        { provide: AuthWebService, useClass: MockAuthWebService },
        MessageService,
      ],
      imports: [
        AuthModule,
        ToastModule,
        MenubarModule,
        ReactiveFormsModule,
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
