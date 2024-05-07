import { Pipe, PipeTransform } from '@angular/core';
import { GameProviderNames } from '../../models/game-provider-names';

@Pipe({
  name: 'gameProviderLogo',
  standalone: true,
})
export class GameProviderLogoPipe implements PipeTransform {
  public transform(providerName: string): string {
    switch(providerName) {
      case GameProviderNames.STEAM:
        return '/assets/steam.png';
      case GameProviderNames.GOG:
        return '/assets/gog.png';
      case GameProviderNames.EGS:
        return '/assets/egs.png';
      default:
        return '/assets/steam.png';
    }
  }

}
