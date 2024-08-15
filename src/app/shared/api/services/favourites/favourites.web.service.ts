import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiGame } from '../../models/api-game.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class FavouriteWebService {
  private basePath = environment.API_BASE_URL;
  private http = inject(HttpClient);

  public getFavouriteList(): Observable<ApiGame[]> {
    return this.http.get<ApiGame[]>(`${this.basePath}/v1/favorite/get-list`);
  }

  public addToFavourites(name: string, steamId?: string, gogId?: string, egsId?: string): Observable<void> {
    return this.http.post<void>(`${this.basePath}/v1/favorite/add`, { name, steamId, gogId, egsId });
  }

  public deleteFromFavourites(name: string): Observable<void> {
    return this.http.delete<void>(`${this.basePath}/v1/favorite/delete-game?name=${name}`);
  }
}
