import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FavouriteWebService } from '../../api/services/favourites/favourites.web.service';
import { Game } from '../../models/game.interface';
import { GameTransformerService } from '../../api/transformers/game-transformer.service';

@Injectable({ providedIn: 'root' })
export class FavouriteService {
  private readonly api = inject(FavouriteWebService);
  private readonly transformer = inject(GameTransformerService);

  public getFavouriteList(): Observable<Game[]> {
    return this.api.getFavouriteList()
      .pipe(
        map(apiGames => this.transformer.transform(apiGames)),
      );
  }

  public addToFavourites(name: string, steamId?: string, gogId?: string, egsId?: string): Observable<void> {
    return this.api.addToFavourites(name, steamId, gogId, egsId);
  }

  public deleteFromFavourites(name: string): Observable<void> {
    return this.api.deleteFromFavourites(name);
  }
}
