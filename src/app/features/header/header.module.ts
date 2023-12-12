import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header.component';
import { AuthModule } from '../../shared/ui/auth/auth.module';

import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,

    // Shared Modules
    AuthModule,

    // PrimeNg
    MenubarModule,
    ButtonModule,
    DynamicDialogModule,
    AvatarModule,
    TooltipModule,
    RippleModule,
    ToastModule,
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  providers: [ DialogService ],
})
export class HeaderModule { }
