import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FavouritesActions from '../actions/favourites.actions';
import { catchError, of, switchMap } from 'rxjs';
import { FavouriteService } from '../../services/favourites/favourites.service';
import { Game } from '../../models/game.interface';
import { MessageService } from 'primeng/api';

@Injectable()
export class FavouritesEffects {
    private actions$ = inject(Actions);
    private api = inject(FavouriteService);
    private messageService = inject(MessageService)

    public getFavouriteList$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FavouritesActions.loadFavouriteListAction),
            switchMap(() => {
                return this.api.getFavouriteList().pipe(
                    switchMap((favourites: Game[]) => {
                        return of(
                            FavouritesActions.loadFavouriteListSuccessAction({
                                favourites,
                            })
                        );
                    }),
                    catchError(error => {
                        return of(FavouritesActions.loadFavouriteListFailAction({ error: '' }));
                        // return of(FavouritesActions.loadFavouriteListFailAction({ error: error?.message }));
                    })
                );
            })
        )
    );

    public addToFavourites$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FavouritesActions.addToFavouritesAction),
            switchMap(({ game }) => {
                return this.api.addToFavourites(game.name, game.steam?.id, game.gog?.id, game.egs?.id).pipe(
                    switchMap(_success => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Game has been added to your favourites!' });

                        return of(
                            FavouritesActions.addToFavouritesSuccessAction({ game })
                        );
                    }),
                    catchError(error => {
                        return of(FavouritesActions.addToFavouritesFailAction({ error: error?.status === 0 || error?.status === 403 ? 'You need to login or register first.' : error?.message }));
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
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Game has been removed from your favourites.' });

                        return of(
                            FavouritesActions.deleteFromFavouritesSuccessAction({ name })
                        );
                    }),
                    catchError(error => {
                        return of(FavouritesActions.deleteFromFavouritesFailAction({ error: error?.status === 0 || error?.status === 403 ? 'You need to login or register first.' : error?.message }));
                    })
                );
            })
        )
    );
}
