import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { AuthWebService } from '../../api/services/auth/auth.web.service';
import { MockAuthWebService } from '../../testing/auth/auth.web.service.mock';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { MenuModule } from 'primeng/menu';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthComponent,
        
        AvatarModule,
        TooltipModule,
        RippleModule,
        MenuModule,
      ],
      providers: [
        { provide: AuthWebService, useClass: MockAuthWebService },
        MessageService,
        DialogService,
      ],
    });
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
