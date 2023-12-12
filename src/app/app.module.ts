import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './shared/utils/interceptors/auth.interceptor';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule,
  ],
  providers: [
    // TODO: where to put http interceptors? In Auth Module?
    // { provide: HTTP_INTERCEPTORS, useValue: AuthInterceptor, multi: true },
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
