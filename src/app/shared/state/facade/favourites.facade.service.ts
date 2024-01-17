import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../actions/favourites.actions';
import * as Selectors from '../selectors/favourites.selectors';
import { Observable, filter } from 'rxjs';
import { Game } from '../../models/game.interface';

@Injectable({ providedIn: 'root' })
export class FavouritesFacadeService {
  private store = inject(Store);

  public favourites$: Observable<Game[]> = this.store.select(Selectors.selectFavourites);
  public isLoading$: Observable<boolean> = this.store.select(Selectors.selectIsLoading);
  public error$: Observable<string> = this.store.select(Selectors.selectError).pipe(filter(error => !!error));

  public getFavouriteList(): void {
    this.store.dispatch(Actions.loadFavouriteListAction());
  }

  public addToFavourite(game: Game): void {
    this.store.dispatch(Actions.addToFavouritesAction({ game }));
  }
  
  public deleteFromFavourites(name: string): void {
    this.store.dispatch(Actions.deleteFromFavouritesAction({ name }));
  }
}
