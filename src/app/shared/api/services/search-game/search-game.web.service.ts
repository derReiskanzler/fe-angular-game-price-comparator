import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiGame } from '../../models/api-game.interface';

@Injectable({ providedIn: 'root' })
export class SearchGameWebService {
  private basePath = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  public searchGame(search: string): Observable<ApiGame[]> {
    return this.http.get<ApiGame[]>(`${this.basePath}/v1/games/search?name=${search}`);
  }
}
