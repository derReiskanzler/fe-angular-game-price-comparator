import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiGame } from '../../models/api-game.interface';
import { EnvironmentService } from '../../../services/environment/environment.service';

@Injectable({ providedIn: 'root' })
export class FavouriteWebService {
  private readonly envService = inject(EnvironmentService);
  private readonly http = inject(HttpClient);

  public getFavouriteList(): Observable<ApiGame[]> {
    return this.http.get<ApiGame[]>(`${this.envService.apiBaseUrl}/v1/favorite/get-list`);
  }

  public addToFavourites(name: string, steamId?: string, gogId?: string, egsId?: string): Observable<void> {
    return this.http.post<void>(`${this.envService.apiBaseUrl}/v1/favorite/add`, { name, steamId, gogId, egsId });
  }

  public deleteFromFavourites(name: string): Observable<void> {
    return this.http.delete<void>(`${this.envService.apiBaseUrl}/v1/favorite/delete-game?name=${name}`);
  }
}
