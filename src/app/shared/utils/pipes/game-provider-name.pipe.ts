import { Pipe, PipeTransform } from '@angular/core';
import { GameProviderNames } from '../../models/game-provider-names';

@Pipe({
  name: 'gameProviderName',
  standalone: true,
})
export class GameProviderNamePipe implements PipeTransform {
  public transform(name: string): string {
    switch(name) {
      case GameProviderNames.STEAM:
        return 'Steam';
      case GameProviderNames.GOG:
        return 'GoG';
      case GameProviderNames.EGS:
        return 'EGS';
      default:
        return 'Steam';
    }
  }
}
