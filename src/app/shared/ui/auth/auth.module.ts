import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { AuthComponent } from './auth.component';

import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AutoFocusModule } from 'primeng/autofocus';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { AvatarModule } from 'primeng/avatar';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // PrimeNg
    InputTextModule,
    TabViewModule,
    ButtonModule,
    AutoFocusModule,
    DynamicDialogModule,
    
    AvatarModule,
    TooltipModule,
    RippleModule,
    ToastModule,
    MenuModule,
  ],
  declarations: [ AuthComponent, AuthDialogComponent ],
  exports: [ AuthComponent, AuthDialogComponent ],
  providers: [ DialogService ],
})
export class AuthModule { }
