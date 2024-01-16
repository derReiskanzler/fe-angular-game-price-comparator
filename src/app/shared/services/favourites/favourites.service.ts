import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { FavouriteWebService } from '../../api/services/favourites/favourites.web.service';
import { Favourite } from '../../models/favourite.interface';

@Injectable({ providedIn: 'root' })
export class FavouriteService {
  private api = inject(FavouriteWebService);

  public getFavouriteList(): Observable<Favourite[]> {
    return this.api.getFavouriteList()
      .pipe(
        map(favourites => favourites.map(apiFavourite => apiFavourite as Favourite)),
      );
  }

  public addToFavourites(name: string, steamId?: number, gogId?: number): Observable<void> {
    return this.api.addToFavourites(name, steamId, gogId);
  }

  public deleteFromFavourites(name: string): Observable<void> {
    return this.api.deleteFromFavourites(name);
  }
}
