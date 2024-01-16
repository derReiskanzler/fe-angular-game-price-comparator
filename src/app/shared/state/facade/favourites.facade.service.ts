import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Actions from '../actions/favourites.actions';
import * as Selectors from '../selectors/favourites.selectors';
import { Observable } from 'rxjs';
import { Favourite } from '../../models/favourite.interface';
import { AddToFavouritesDto } from '../../dtos/add-to-favourites.dto';

@Injectable({ providedIn: 'root' })
export class FavouritesFacadeService {
  private store = inject(Store);

  public favourites$: Observable<Favourite[]> = this.store.select(Selectors.selectFavourites);
  public isLoading$: Observable<boolean> = this.store.select(Selectors.selectIsLoading);

  public getFavouriteList(): void {
    this.store.dispatch(Actions.getFavouriteListAction());
  }

  public addToFavourite(dto: AddToFavouritesDto): void {
    this.store.dispatch(Actions.addToFavouritesAction({ dto }));
  }
  
  public deleteFromFavourites(name: string): void {
    this.store.dispatch(Actions.deleteFromFavouritesAction({ name }));
  }
}
