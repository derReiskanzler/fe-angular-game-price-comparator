import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameDetailsComponent } from './game-details.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { GameProviderDetailsModule } from '../game-provider-details/game-provider-details.module';



@NgModule({
  declarations: [ GameDetailsComponent ],
  imports: [
    CommonModule,
    TabViewModule,
    ButtonModule,
    
    GameProviderDetailsModule,
  ],
  exports: [ GameDetailsComponent ],
})
export class GameDetailsModule { }
