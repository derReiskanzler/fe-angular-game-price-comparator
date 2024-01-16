import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home-shell.module').then((m) => m.HomeShellModule),
  },
  {
    path: 'favourites',
    loadChildren: () =>
      import('./features/favourites/favourites-shell.module').then((m) => m.FavouritesShellModule),
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
