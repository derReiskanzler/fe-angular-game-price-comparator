import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouriteListComponent } from './favourite-list.component';
import { FavouriteListRoutingModule } from './favourites-list-routing.module';
import { GameListModule } from '../../../../shared/ui/game-list/game-list.module';

@NgModule({
  declarations: [
    FavouriteListComponent
  ],
  imports: [
    CommonModule,
    FavouriteListRoutingModule,
    GameListModule,
  ]
})
export class FavouriteListModule { }
