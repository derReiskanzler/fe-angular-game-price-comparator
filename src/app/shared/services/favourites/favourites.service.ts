import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FavouriteWebService } from '../../api/services/favourites/favourites.web.service';
import { Game } from '../../models/game.interface';
import { GameTransformerService } from '../../api/transformer/game-transformer.service';

@Injectable({ providedIn: 'root' })
export class FavouriteService {
  private api = inject(FavouriteWebService);
  private transformer = inject(GameTransformerService);

  public getFavouriteList(): Observable<Game[]> {
    return this.api.getFavouriteList()
      .pipe(
        map(apiGames => this.transformer.transform(apiGames)),
      );
  }

  public addToFavourites(name: string, steamId?: number, gogId?: number, egsId?: string): Observable<void> {
    return this.api.addToFavourites(name, steamId, gogId, egsId);
  }

  public deleteFromFavourites(name: string): Observable<void> {
    return this.api.deleteFromFavourites(name);
  }
}
