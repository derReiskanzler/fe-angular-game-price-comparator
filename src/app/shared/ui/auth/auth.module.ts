import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AutoFocusModule } from 'primeng/autofocus';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // PrimeNg
    InputTextModule,
    TabViewModule,
    ButtonModule,
    AutoFocusModule,
    ToastModule,
  ],
  declarations: [ AuthComponent ],
  exports: [ AuthComponent ],
})
export class AuthModule { }
