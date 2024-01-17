import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameOsSupportedModule } from '../game-os-supported/game-os-supported.module';
import { GameProviderDetailsModule } from '../game-provider-details/game-provider-details.module';

@NgModule({
  declarations: [ GameComponent ],
  imports: [
    CommonModule,
    GameProviderDetailsModule,
    GameOsSupportedModule,
  ],
  exports: [ GameComponent ],
})
export class GameModule { }
