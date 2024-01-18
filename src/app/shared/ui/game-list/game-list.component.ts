import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/game.interface';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameListComponent {
  @Input() games!: Game[]|null;
  @Input() isLoading: boolean|null = false;
  @Output() selectGame = new EventEmitter<Game>();
  @Output() favourize = new EventEmitter<Game>();
}
