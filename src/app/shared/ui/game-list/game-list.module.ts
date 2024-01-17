import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameListComponent } from './game-list.component';
import { GameProviderDetailsModule } from '../game-provider-details/game-provider-details.module';
import { GameOsSupportedModule } from '../game-os-supported/game-os-supported.module';
import { SkeletonModule } from 'primeng/skeleton';



@NgModule({
  declarations: [ GameListComponent ],
  imports: [
    CommonModule,
    GameProviderDetailsModule,
    GameOsSupportedModule,
    SkeletonModule,
  ],
  exports: [ GameListComponent ],
})
export class GameListModule { }
