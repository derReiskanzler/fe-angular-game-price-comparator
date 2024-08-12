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
  @Input() id?: number|string|null;
  @Input() name?: string|null;
  @Input() link?: string|null;
  @Input() price?: GamePrice|null;
  @Input() imagePath?: string= '';
  @Input() showWebsiteLabel = true;
  @Input() showPriceLabel = true;
  @Input() styleClass = 'flex flex-column gap-2';
}
