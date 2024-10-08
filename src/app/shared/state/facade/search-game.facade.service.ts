import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as SearchGameActions from '../actions/search-game.actions';
import * as FavouritesActions from '../actions/favourites.actions';
import * as Selectors from '../selectors/search-game.selectors';
import { Observable, filter } from 'rxjs';
import { Game } from '../../models/game.interface';

@Injectable({ providedIn: 'root' })
export class SearchGameFacadeService {
  private readonly store = inject(Store);

  public readonly search$: Observable<string> = this.store.select(Selectors.selectSearch);
  public readonly results$: Observable<Game[]> = this.store.select(Selectors.selectResults);
  public readonly favourites$: Observable<Game[]> = this.store.select(Selectors.selectFavourites);
  public readonly isLoading$: Observable<boolean> = this.store.select(Selectors.selectIsLoading);
  public readonly selectedGame$: Observable<Game> = this.store.select(Selectors.selectSelectedGame);
  public readonly error$: Observable<string> = this.store.select(Selectors.selectError).pipe(filter(error => !!error));

  public searchGame(search: string): void {
    this.store.dispatch(SearchGameActions.searchGameAction({ search }));
  }

  public resetSearch(): void {
    this.store.dispatch(SearchGameActions.resetSearchAction());
  }
  
  public selectGame(game: Game): void {
    this.store.dispatch(SearchGameActions.selectGameAction({ game }));
  }

  public getFavouriteList(): void {
    this.store.dispatch(FavouritesActions.loadFavouriteListAction());
  }

  public addToFavourite(game: Game): void {
    this.store.dispatch(FavouritesActions.addToFavouritesAction({ game }));
  }
  
  public deleteFromFavourites(name: string): void {
    this.store.dispatch(FavouritesActions.deleteFromFavouritesAction({ name }));
  }
}
