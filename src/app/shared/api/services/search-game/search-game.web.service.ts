import { Injectable, inject } from '@angular/core';
import { SearchGameApiResponse } from '../../models/search-game-api-response.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SearchGameWebService {
  private basePath = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  public searchGame(search: string): Observable<SearchGameApiResponse> {
    return this.http.post<SearchGameApiResponse>(`${this.basePath}/v1/games/search`, { search });
  }
}
