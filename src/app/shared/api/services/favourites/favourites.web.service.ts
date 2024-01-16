import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiFavourite } from '../../models/api-favourite.interface';

@Injectable({ providedIn: 'root' })
export class FavouriteWebService {
  private basePath = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  public getFavouriteList(): Observable<ApiFavourite[]> {
    return this.http.get<ApiFavourite[]>(`${this.basePath}/v1/favourite/get-list`);
  }

  public addToFavourites(name: string, steamId?: number, gogId?: number): Observable<void> {
    return this.http.post<void>(`${this.basePath}/v1/favourite/add`, { name, steamId, gogId });
  }

  public deleteFromFavourites(name: string): Observable<void> {
    return this.http.delete<void>(`${this.basePath}/v1/favourite/delete-game?name=${name}`);
  }
}
