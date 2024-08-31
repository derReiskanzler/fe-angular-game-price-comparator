import { Injectable } from '@angular/core';
import { ApiGame, ApiGameInfo, ApiGamePrice } from '../models/api-game.interface';
import { Game, GameInfo, GamePrice } from '../../models/game.interface';

@Injectable({ providedIn: 'root' })
export class GameTransformerService {
  public transform(apiGames: ApiGame[]): Game[] {
    return apiGames.map(apiGame => ({
      name: apiGame.name,
      type: apiGame.type,
      gameProviders: apiGame.game_providers ? this.transformGameProvider(apiGame.game_providers) : [],
      image: apiGame.image,
      platforms: apiGame.platforms,
      shortDescription: apiGame.short_description,
      detailedDescription: apiGame.detailed_description,
      aboutTheGame: apiGame.about_the_game,
      isFavourite: apiGame.is_favorite,
    } as Game));
  }

  public transformGameProvider(apiGameInfos: ApiGameInfo[]): GameInfo[] {
    return apiGameInfos.map(info => ({
      id: info.id,
      link: info.link,
      name: info.name,
      price: info.price ? this.transformGamePrice(info.price) : null,
    }));
  }

  public transformGamePrice(apiGamePrice: ApiGamePrice): GamePrice {
    return {
      intital: apiGamePrice.initial_value,
      final: apiGamePrice.final_value,
      discountPercent: apiGamePrice.discount_percent,
      currency: apiGamePrice.currency,
      isFree: apiGamePrice.is_free,
    } as GamePrice;
  }
}
