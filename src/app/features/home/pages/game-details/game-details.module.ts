import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsRoutingModule } from './game-details-routing.module';
import { GameDetailsComponent } from './game-details.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { GameProviderDetailsModule } from '../../../../shared/ui/game-provider-details/game-provider-details.module';
import { GameOsSupportedModule } from '../../../../shared/ui/game-os-supported/game-os-supported.module';

@NgModule({
  imports: [
    CommonModule,
    GameDetailsRoutingModule,
    TabViewModule,
    ButtonModule,
    GameProviderDetailsModule,
    GameOsSupportedModule,
  ],
  declarations: [ GameDetailsComponent ],
})
export class GameDetailsModule { }
