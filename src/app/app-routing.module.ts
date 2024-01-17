import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedIn } from './shared/utils/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'home/game-details',
    loadComponent: () =>
      import('./features/game-details/game-details.component').then((c) => c.GameDetailsComponent),
  },
  {
    path: 'favourites',
    canMatch: [IsLoggedIn],
    loadComponent: () =>
      import('./features/favourites/favourites.component').then((c) => c.FavouriteListComponent),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
