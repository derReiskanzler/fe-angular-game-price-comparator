import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './app/shared/utils/interceptors/auth.interceptor';
import { LOCALE_ID, importProvidersFrom } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { FavouritesEffects } from './app/shared/state/effects/favourites.effects';
import { SearchGameEffects } from './app/shared/state/effects/search-game.effects';
import { searchGameReducerKey, searchGameReducer } from './app/shared/state/reducers/search-game.reducer';
import { provideRouter } from '@angular/router';
import { HasGameSelectedMatchGuard } from './app/shared/utils/guards/has-game-selected.guard';
import { IsLoggedInMatchGuard } from './app/shared/utils/guards/is-logged-in.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './app/features/home/home.component';
import { GameDetailsComponent } from './app/features/game-details/game-details.component';
import { FavouriteListComponent } from './app/features/favourites/favourites.component';
import { DialogService } from 'primeng/dynamicdialog';

registerLocaleData(localeDe);

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'home',
        component: HomeComponent,
        // loadComponent: () =>
        //   import('./app/features/home/home.component').then((c) => c.HomeComponent),
      },
      {
        path: 'home/game-details',
        canMatch: [HasGameSelectedMatchGuard],
        component: GameDetailsComponent,
        // loadComponent: () =>
        //   import('./app/features/game-details/game-details.component').then((c) => c.GameDetailsComponent),
      },
      {
        path: 'favourites',
        canMatch: [IsLoggedInMatchGuard],
        component: FavouriteListComponent,
        // loadComponent: () =>
        //   import('./app/features/favourites/favourites.component').then((c) => c.FavouriteListComponent),
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ]),
    importProvidersFrom([
      CommonModule,
      HttpClientModule,
      BrowserAnimationsModule,
    ]),
    provideHttpClient(withInterceptors([ AuthInterceptor ])),
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    },
    MessageService,
    DialogService,
    provideStore({
      [searchGameReducerKey]: searchGameReducer,
    }),
    provideEffects([SearchGameEffects, FavouritesEffects]),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
    }),
  ]
});
