import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { AuthModule } from '../../shared/ui/auth/auth.module';

import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Shared Modules
    AuthModule,

    // PrimeNg
    MenubarModule,
    ToastModule,
    InputTextModule,
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ],
})
export class HeaderModule { }
