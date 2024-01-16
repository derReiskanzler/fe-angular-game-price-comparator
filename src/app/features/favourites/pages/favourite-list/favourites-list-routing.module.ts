import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteListComponent } from './favourite-list.component';
import { AuthGuard } from '../../../../shared/utils/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuard],
    component: FavouriteListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteListRoutingModule { }
