import { Injectable } from '@angular/core';
import { ApiGame, ApiGameInfo, ApiGamePrice, ApiEgsGameInfo } from '../models/api-game.interface';
import { EgsGameInfo, Game, GameInfo, GamePrice } from '../../models/game.interface';

@Injectable({ providedIn: 'root' })
export class GameTransformerService {
  public transform(apiGames: ApiGame[]): Game[] {
    return apiGames.map(apiGame => ({
      name: apiGame.name,
      type: apiGame.type,
      steam: apiGame.steam ? this.transformGameInfo(apiGame.steam) : null,
      gog: apiGame.gog ? this.transformGameInfo(apiGame.gog) : null,
      egs: apiGame.egs ? this.transformEgsGameInfo(apiGame.egs) : null,
      image: apiGame.image,
      platforms: apiGame.platforms,
      shortDescription: apiGame.short_description,
      detailedDescription: apiGame.detailed_description,
      aboutTheGame: apiGame.about_the_game,
      isFavourite: apiGame.isFavorite,
    } as Game));
  }

  public transformGameInfo(apiGameInfo: ApiGameInfo): GameInfo {
    return {
      id: apiGameInfo.id,
      link: apiGameInfo.link,
      price: this.transformGamePrice(apiGameInfo.price),
    } as GameInfo;
  }

  public transformEgsGameInfo(apiGameInfo: ApiEgsGameInfo): EgsGameInfo {
    return {
      id: apiGameInfo.id,
      link: apiGameInfo.link,
      price: this.transformGamePrice(apiGameInfo.price),
    } as EgsGameInfo;
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
