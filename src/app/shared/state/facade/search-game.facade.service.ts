import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../actions/search-game.actions';
import * as Selectors from '../selectors/search-game.selectors';
import { Observable } from 'rxjs';
import { Game } from '../../models/game.interface';

@Injectable({ providedIn: 'root' })
export class SearchGameFacadeService {
  private store = inject(Store);

  public search$: Observable<string> = this.store.select(Selectors.selectSearch);
  public results$: Observable<Game[]> = this.store.select(Selectors.selectResults);
  public isLoading$: Observable<boolean> = this.store.select(Selectors.selectIsLoading);
  public error$: Observable<string> = this.store.select(Selectors.selectError);

  public searchGame(search: string): void {
    this.store.dispatch(Actions.searchGameAction({ search }));
  }

  public resetSearch(): void {
    this.store.dispatch(Actions.resetSearchAction());
  }
}
