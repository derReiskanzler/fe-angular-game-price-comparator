import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { cold, hot } from 'jest-marbles';
import * as FavouriteActions from '../actions/favourites.actions';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, throwError } from 'rxjs';
import { FavouritesEffects } from './favourites.effects';
import { FavouriteService } from '../../services/favourites/favourites.service';
import { MockFavouriteService } from '../../testing/favourites/favourites.service.mock';
import { gameMock } from '../../testing/search/game.mock';
import { Game } from '../../models/game.interface';
import { initialSearchGameState } from '../reducers/search-game.reducer';
import { MessageService } from 'primeng/api';

describe('Favourite Effects', () => {
    let actions$ = new Observable<Action>();
    let api: FavouriteService;
    let effects: FavouritesEffects;
    let store: Store;

    const favourites: Game[] = [ gameMock ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                FavouritesEffects,
                {
                    provide: FavouriteService,
                    useClass: MockFavouriteService,
                },
                provideMockActions(() => actions$),
                provideMockStore({ initialState: initialSearchGameState }),
                MessageService,
            ],
        });
        api = TestBed.inject(FavouriteService);
        effects = TestBed.inject(FavouritesEffects);
        store = TestBed.inject(Store);
    });

    describe('load favourite list effect', () => {
        it('should trigger loadFavouriteListSuccessAction on success', () => {
            jest.spyOn(api, 'getFavouriteList').mockReturnValue(of(favourites));

            actions$ = hot('-a', {
                a: FavouriteActions.loadFavouriteListAction(),
            });
            const expected = cold('-b', {
                b: FavouriteActions.loadFavouriteListSuccessAction({ favourites }),
            });
            const result = effects.getFavouriteList$;

            expect(result).toBeObservable(expected);
        });

        it('should trigger loadFavouriteListFailAction on failure', () => {
            const error = 'error occurred';

            jest.spyOn(api, 'getFavouriteList').mockReturnValue(throwError(() => new Error(error)));
            actions$ = hot('-a', {
                a: FavouriteActions.loadFavouriteListAction(),
            });
            const expected = cold('-b', {
                b: FavouriteActions.loadFavouriteListFailAction({ error }),
            });
            const result = effects.getFavouriteList$;

            expect(result).toBeObservable(expected);
        });
    });

    describe('add to favourites effect', () => {
        it('should trigger addToFavouritesSuccessAction on success', () => {
            jest.spyOn(api, 'addToFavourites').mockReturnValue(of(void 0));

            actions$ = hot('-a', {
                a: FavouriteActions.addToFavouritesAction({ game: gameMock }),
            });
            const expected = cold('-b', {
                b: FavouriteActions.addToFavouritesSuccessAction({ game: gameMock }),
            });
            const result = effects.addToFavourites$;

            expect(result).toBeObservable(expected);
        });

        it('should trigger addToFavouritesFailAction on failure', () => {
            const error = 'error occurred';

            jest.spyOn(api, 'addToFavourites').mockReturnValue(throwError(() => new Error(error)));
            actions$ = hot('-a', {
                a: FavouriteActions.addToFavouritesAction({ game: gameMock }),
            });
            const expected = cold('-b', {
                b: FavouriteActions.addToFavouritesFailAction({ error }),
            });
            const result = effects.addToFavourites$;

            expect(result).toBeObservable(expected);
        });
    });

    describe('delete from favourites effect', () => {
        it('should trigger deleteFromFavouritesSuccessAction on success', () => {
            jest.spyOn(api, 'deleteFromFavourites').mockReturnValue(of(void 0));

            actions$ = hot('-a', {
                a: FavouriteActions.deleteFromFavouritesAction({ name: gameMock.name }),
            });
            const expected = cold('-b', {
                b: FavouriteActions.deleteFromFavouritesSuccessAction({ name: gameMock.name}),
            });
            const result = effects.deleteFromFavourites$;

            expect(result).toBeObservable(expected);
        });

        it('should trigger deleteFromFavouritesFailAction on failure', () => {
            const error = 'error occurred';

            jest.spyOn(api, 'deleteFromFavourites').mockReturnValue(throwError(() => new Error(error)));
            actions$ = hot('-a', {
                a: FavouriteActions.deleteFromFavouritesAction({ name: gameMock.name }),
            });
            const expected = cold('-b', {
                b: FavouriteActions.deleteFromFavouritesFailAction({ error }),
            });
            const result = effects.deleteFromFavourites$;

            expect(result).toBeObservable(expected);
        });
    });
});
