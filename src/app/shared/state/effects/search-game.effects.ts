import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SearchGameActions from '../actions/search-game.actions';
import { catchError, of, switchMap } from 'rxjs';
import { Game } from '../../models/game.interface';
import { SearchGameService } from '../../services/search-game/search-game.service';

@Injectable()
export class SearchGameEffects {
    private actions$ = inject(Actions);
    private api = inject(SearchGameService);

    public searchGame$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SearchGameActions.searchGameAction),
            switchMap(({ search }) => {
                return this.api.searchGame(search).pipe(
                    switchMap((results: Game[]) => {
                        return of(
                            SearchGameActions.searchGameSuccessAction({
                                results,
                            })
                        );
                    }),
                    catchError(error => {
                        return of(SearchGameActions.searchGameFailAction({ error: error?.message }));
                    })
                );
            })
        )
    );
}
