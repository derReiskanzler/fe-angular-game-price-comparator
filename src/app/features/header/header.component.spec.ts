import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { provideMockStore } from '@ngrx/store/testing';
import { initialSearchGameState } from '../../shared/state/reducers/search-game.reducer';
import { AuthWebService } from '../../shared/api/services/auth/auth.web.service';
import { MockAuthWebService } from '../../shared/testing/auth/auth.web.service.mock';
import { ToastModule } from 'primeng/toast';
import { MenubarModule } from 'primeng/menubar';
import { MessageService } from 'primeng/api';
import { AuthComponent } from '../../shared/ui/auth/auth.component';
import { DialogService } from 'primeng/dynamicdialog';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState: initialSearchGameState }),
        { provide: AuthWebService, useClass: MockAuthWebService },
        MessageService,
        DialogService,
      ],
      imports: [
        AuthComponent,
        ToastModule,
        MenubarModule,
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
