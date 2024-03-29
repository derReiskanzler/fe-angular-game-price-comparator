import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EgsGameInfo, GameInfo, GamePlatforms } from '../../models/game.interface';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  @Input() image: string|undefined;
  @Input() name: string|undefined;
  @Input() steam: GameInfo|undefined|null;
  @Input() gog: GameInfo|undefined|null;
  @Input() egs: EgsGameInfo|undefined|null;
  @Input() platforms: GamePlatforms|undefined;
  @Input() isFavourite: boolean|undefined;
  @Output() selectGame = new EventEmitter<void>();
  @Output() favourize = new EventEmitter<void>();
}
