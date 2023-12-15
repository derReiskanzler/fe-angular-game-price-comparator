import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';

import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AutoFocusModule } from 'primeng/autofocus';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // PrimeNg
    InputTextModule,
    TabViewModule,
    ButtonModule,
    AutoFocusModule,
  ],
  declarations: [ AuthComponent ],
  exports: [ AuthComponent ],
})
export class AuthModule { }
