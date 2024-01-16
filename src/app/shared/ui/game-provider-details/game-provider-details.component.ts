import { Component, Input } from '@angular/core';
import { GamePrice } from '../../models/game.interface';

@Component({
  selector: 'app-game-provider-details',
  templateUrl: './game-provider-details.component.html',
  styleUrls: ['./game-provider-details.component.scss']
})
export class GameProviderDetailsComponent {
  @Input() id?: number|null;
  @Input() link?: string|null;
  @Input() price?: GamePrice|null;
}
