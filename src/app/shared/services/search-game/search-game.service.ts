import { Injectable, inject } from '@angular/core';
import { SearchGameWebService } from '../../api/services/search-game/search-game.web.service';
import { Observable, map } from 'rxjs';
import { Game, GameInfo, GamePrice } from '../../models/game.interface';
import { ApiGame, ApiGameInfo, ApiGamePrice } from '../../api/models/api-game.interface';

@Injectable({ providedIn: 'root' })
export class SearchGameService {
  private api = inject(SearchGameWebService);

  public searchGame(search: string): Observable<Game[]> {
    return this.api.searchGame(search)
      .pipe(
        map(apiGames => this.transform(apiGames)),
      );
  }
  
  private transform(apiGames: ApiGame[]): Game[] {
    return apiGames.map(apiGame => ({
      name: apiGame.name,
      type: apiGame.type,
      steam: apiGame.steam ? this.transformGameInfo(apiGame.steam) : null,
      gog: apiGame.gog ? this.transformGameInfo(apiGame.gog) : null,
      image: apiGame.image,
      platforms: apiGame.platforms,
      shortDescription: apiGame.short_description,
      detailedDescription: apiGame.detailed_description,
      aboutTheGame: apiGame.about_the_game,
    } as Game));
  }

  private transformGameInfo(apiGameInfo: ApiGameInfo): GameInfo {
    return {
      id: apiGameInfo.id,
      link: apiGameInfo.link,
      price: this.transformGamePrice(apiGameInfo.price),
    } as GameInfo;
  }

  private transformGamePrice(apiGamePrice: ApiGamePrice): GamePrice {
    return {
      intital: apiGamePrice.intital_value,
      final: apiGamePrice.final_value,
      discountPercent: apiGamePrice.discount_percent,
      currency: apiGamePrice.currency,
      isFree: apiGamePrice.is_free,
    } as GamePrice;
  }
}
