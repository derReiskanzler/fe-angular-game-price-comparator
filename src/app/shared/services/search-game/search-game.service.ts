import { Injectable, inject } from '@angular/core';
import { SearchGameWebService } from '../../api/services/search-game/search-game.web.service';
import { Observable, map } from 'rxjs';
import { Game } from '../../models/game.interface';
import { GameTransformerService } from '../../api/transformers/game-transformer.service';

@Injectable({ providedIn: 'root' })
export class SearchGameService {
  private readonly api = inject(SearchGameWebService);
  private readonly transformer = inject(GameTransformerService);

  public searchGame(search: string): Observable<Game[]> {
    return this.api.searchGame(search)
      .pipe(
        map(apiGames => this.transformer.transform(apiGames)),
      );
  }
}
