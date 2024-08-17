import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GamePrice } from '../../models/game.interface';
import { CurrencyPipe, NgIf } from '@angular/common';
import { SplitPipe } from '../../utils/pipes/split.pipe';

@Component({
  selector: 'app-game-provider-details',
  templateUrl: './game-provider-details.component.html',
  styleUrls: ['./game-provider-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgIf,
    SplitPipe,
    CurrencyPipe,
  ],
})
export class GameProviderDetailsComponent {
  @Input() public id?: number|string|null;
  @Input() public name?: string|null;
  @Input() public link?: string|null;
  @Input() public price?: GamePrice|null;
  @Input() public imagePath?: string= '';
  @Input() public showWebsiteLabel = true;
  @Input() public showPriceLabel = true;
  @Input() public styleClass = 'flex flex-column gap-2';
}
