import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/game.interface';
import { GameProviderTypes } from '../../models/game-provider-types.enum';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent {
  public activeIndex: number = GameProviderTypes.STEAM;

  @Input() game?: Game|null;
  @Output() back = new EventEmitter<void>();
}
