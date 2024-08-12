import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { GameInfo, GamePlatforms } from '../../models/game.interface';
import { GameProviderLogoPipe } from '../../utils/pipes/game-provider-logo.pipe';
import { FavouriteIconComponent } from '../favourite-icon/favourite-icon.component';
import { GameOsSupportedComponent } from '../game-os-supported/game-os-supported.component';
import { GameProviderDetailsComponent } from '../game-provider-details/game-provider-details.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgFor,
    GameProviderDetailsComponent,
    GameOsSupportedComponent,
    FavouriteIconComponent,
    
    GameProviderLogoPipe,
  ],
})
export class GameComponent {
  @Input() image: string|undefined;
  @Input() name: string|undefined;
  @Input() gameProviders: GameInfo[]|undefined|null;
  @Input() platforms: GamePlatforms|undefined;
  @Input() isFavourite: boolean|undefined;
  @Output() selectGame = new EventEmitter<void>();
  @Output() favourize = new EventEmitter<void>();
}
