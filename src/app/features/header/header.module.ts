import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { AuthModule } from '../../shared/ui/auth/auth.module';

import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,

    // Shared Modules
    AuthModule,

    // PrimeNg
    MenubarModule,
    ToastModule,
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
})
export class HeaderModule { }
