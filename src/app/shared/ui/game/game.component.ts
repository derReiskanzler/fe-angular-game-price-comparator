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
  @Input() public image: string|undefined;
  @Input() public name: string|undefined;
  @Input() public gameProviders: GameInfo[]|undefined|null;
  @Input() public platforms: GamePlatforms|undefined;
  @Input() public isFavourite: boolean|undefined;
  @Output() public selectGame = new EventEmitter<void>();
  @Output() public favourize = new EventEmitter<void>();
}
