import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '../auth/auth.module';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { RippleModule } from 'primeng/ripple';

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
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
  providers: [ DialogService ],
})
export class HeaderModule { }
