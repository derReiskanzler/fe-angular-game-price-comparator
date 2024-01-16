import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../actions/search-game.actions';
import * as Selectors from '../selectors/search-game.selectors';
import { Observable, filter } from 'rxjs';
import { Game } from '../../models/game.interface';

@Injectable({ providedIn: 'root' })
export class SearchGameFacadeService {
  private store = inject(Store);

  public search$: Observable<string> = this.store.select(Selectors.selectSearch);
  public results$: Observable<Game[]> = this.store.select(Selectors.selectResults);
  public isLoading$: Observable<boolean> = this.store.select(Selectors.selectIsLoading);
  public selectedGame$: Observable<Game> = this.store.select(Selectors.selectSelectedGame);
  public error$: Observable<string> = this.store.select(Selectors.selectError).pipe(filter(error => !!error));

  public searchGame(search: string): void {
    this.store.dispatch(Actions.searchGameAction({ search }));
  }

  public resetSearch(): void {
    this.store.dispatch(Actions.resetSearchAction());
  }
  
  public selectGame(game: Game): void {
    this.store.dispatch(Actions.selectGameAction({ game }));
  }
  
  public resetSelectedGame(): void {
    this.store.dispatch(Actions.resetSelectedGameAction());
  }
}
