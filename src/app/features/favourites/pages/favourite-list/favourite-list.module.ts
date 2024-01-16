import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteListComponent } from './favourite-list.component';
import { FavouriteListRoutingModule } from './favourites-list-routing.module';

@NgModule({
  declarations: [
    FavouriteListComponent
  ],
  imports: [
    CommonModule,
    FavouriteListRoutingModule,
  ]
})
export class FavouriteListModule { }
