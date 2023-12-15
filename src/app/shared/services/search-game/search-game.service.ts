import { Injectable, inject } from '@angular/core';
import { SearchGameWebService } from '../../api/services/search-game/search-game.web.service';
import { Observable, map } from 'rxjs';
import { Game } from '../../models/game.interface';

@Injectable({ providedIn: 'root' })
export class SearchGameService {
  private api = inject(SearchGameWebService);

  public searchGame(search: string): Observable<Game[]> {
    return this.api.searchGame(search)
      .pipe(
        map((results) => (results.data as Game[])),
      );
  }
  
}
