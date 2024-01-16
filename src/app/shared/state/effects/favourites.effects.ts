import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FavouritesActions from '../actions/favourites.actions';
import { catchError, of, switchMap } from 'rxjs';
import { Favourite } from '../../models/favourite.interface';
import { FavouriteService } from '../../services/favourites/favourites.service';

@Injectable()
export class FavouritesEffects {
    private actions$ = inject(Actions);
    private api = inject(FavouriteService);

    public getFavouriteList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FavouritesActions.getFavouriteListAction),
            switchMap(() => {
                return this.api.getFavouriteList().pipe(
                    switchMap((favourites: Favourite[]) => {
                        return of(
                            FavouritesActions.getFavouriteListSuccessAction({
                                favourites,
                            })
                        );
                    }),
                    catchError(error => {
                        return of(FavouritesActions.getFavouriteListFailAction());
                    })
                );
            })
        )
    );

    public addToFavourites$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FavouritesActions.addToFavouritesAction),
            switchMap(({ dto }) => {
                return this.api.addToFavourites(dto.name, dto.steamId, dto.gogId).pipe(
                    switchMap(_success => {
                        return of(
                            FavouritesActions.addToFavouritesSuccessAction()
                        );
                    }),
                    catchError(error => {
                        return of(FavouritesActions.addToFavouritesFailAction());
                    })
                );
            })
        )
    );

    public deleteFromFavourites$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FavouritesActions.deleteFromFavouritesAction),
            switchMap(({ name }) => {
                return this.api.deleteFromFavourites(name).pipe(
                    switchMap(_success => {
                        return of(
                            FavouritesActions.deleteFromFavouritesSuccessAction()
                        );
                    }),
                    catchError(error => {
                        return of(FavouritesActions.deleteFromFavouritesFailAction());
                    })
                );
            })
        )
    );
}
