import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthDialogComponent } from './auth-dialog.component';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { AuthWebService } from '../../../api/services/auth/auth.web.service';
import { MockAuthWebService } from '../../../testing/auth/auth.web.service.mock';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../services/auth/auth.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AuthDialogComponent', () => {
  let component: AuthDialogComponent;
  let fixture: ComponentFixture<AuthDialogComponent>;

  // Test file throws: 'ERROR ReferenceError: ResizeObserver is not defined'
  // Link proposes solution below: https://stackoverflow.com/questions/68679993/referenceerror-resizeobserver-is-not-defined
  window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn(),
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AuthDialogComponent,

        InputTextModule,
        TabViewModule,
        ButtonModule,
        AutoFocusModule,
      ],
      providers: [
        { provide: AuthWebService, useClass: MockAuthWebService },
        AuthService,
        DynamicDialogRef,
        MessageService,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(AuthDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
