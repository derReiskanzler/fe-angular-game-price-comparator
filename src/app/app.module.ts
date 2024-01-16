import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './features/header/header.module';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './shared/utils/interceptors/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { searchGameReducer, searchGameReducerKey } from './shared/state/reducers/search-game.reducer';
import { SearchGameEffects } from './shared/state/effects/search-game.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { favouritesReducer, favouritesReducerKey } from './shared/state/reducers/favourites.reducer';
import { FavouritesEffects } from './shared/state/effects/favourites.effects';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      [searchGameReducerKey]: searchGameReducer,
      [favouritesReducerKey]: favouritesReducer,
    }),
    EffectsModule.forRoot([SearchGameEffects, FavouritesEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),

    // Features
    HeaderModule,
  ],
  providers: [
    provideHttpClient(withInterceptors([ AuthInterceptor ])),
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
