import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { GameListModule } from '../../../../shared/ui/game-list/game-list.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    GameListModule,
  ],
  declarations: [ HomeComponent ],
})
export class HomeModule { }
