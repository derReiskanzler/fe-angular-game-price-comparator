import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/utils/guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/pages/home.module').then((m) => m.HomeModule),
  },
  // {
  //   path: 'profile',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./features/profile/pages/profile.module').then((m) => m.ProfileModule),
  // },
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
