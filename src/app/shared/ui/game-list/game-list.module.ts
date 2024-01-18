import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import { SkeletonModule } from 'primeng/skeleton';
import { GameModule } from '../game/game.module';



@NgModule({
  declarations: [ GameListComponent ],
  imports: [
    CommonModule,
    SkeletonModule,
    GameModule,
  ],
  exports: [ GameListComponent ],
})
export class GameListModule { }
