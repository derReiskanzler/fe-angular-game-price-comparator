import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiGame } from '../../models/api-game.interface';
import { environment } from '../../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SearchGameWebService {
  private basePath = environment.API_BASE_URL;
  private http = inject(HttpClient);

  public searchGame(search: string): Observable<ApiGame[]> {
    return this.http.get<ApiGame[]>(`${this.basePath}/v1/games/search?name=${search}`);
  }
}
