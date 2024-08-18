import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiGame } from '../../models/api-game.interface';
import { EnvironmentService } from '../../../services/environment/environment.service';

@Injectable({ providedIn: 'root' })
export class SearchGameWebService {
  private readonly envService = inject(EnvironmentService);
  private readonly http = inject(HttpClient);

  public searchGame(search: string): Observable<ApiGame[]> {
    return this.http.get<ApiGame[]>(`${this.envService.apiBaseUrl}/v1/games/search?name=${search}`);
  }
}
