import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameProviderDetailsComponent } from './game-provider-details.component';
import { SplitModule } from '../../utils/pipes/split.module';

@NgModule({
  declarations: [
    GameProviderDetailsComponent,
  ],
  imports: [
    CommonModule,
    SplitModule,
  ],
  exports: [ GameProviderDetailsComponent ],
})
export class GameProviderDetailsModule { }
