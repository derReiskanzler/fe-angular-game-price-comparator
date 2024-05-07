import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import { GameOsSupportedModule } from '../game-os-supported/game-os-supported.module';
import { GameProviderDetailsModule } from '../game-provider-details/game-provider-details.module';
import { FavouriteIconModule } from '../favourite-icon/favourite-icon.module';
import { GameProviderLogoPipe } from '../../utils/pipes/game-provider-logo.pipe';

@NgModule({
  declarations: [ GameComponent ],
  imports: [
    CommonModule,
    GameProviderDetailsModule,
    GameOsSupportedModule,
    FavouriteIconModule,
    
    GameProviderLogoPipe,
  ],
  exports: [ GameComponent ],
})
export class GameModule { }
