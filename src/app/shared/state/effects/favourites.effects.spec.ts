import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { cold, hot } from 'jest-marbles';
import * as FavouriteActions from '../actions/favourites.actions';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, throwError } from 'rxjs';
import { FavouritesEffects } from './favourites.effects';
import { Favourite } from '../../models/favourite.interface';
import { favouriteMock } from '../../testing/favourites/favourite.mock';
import { initialFavouritesState } from '../reducers/favourites.reducer';
import { FavouriteService } from '../../services/favourites/favourites.service';
import { MockFavouriteService } from '../../testing/favourites/favourites.service.mock';

describe('Favourite Effects', () => {
    let actions$ = new Observable<Action>();
    let api: FavouriteService;
    let effects: FavouritesEffects;
    let store: Store;

    const favourites: Favourite[] = [ favouriteMock ];

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
                provideMockStore({ initialState: initialFavouritesState }),
            ],
        });
        api = TestBed.inject(FavouriteService);
        effects = TestBed.inject(FavouritesEffects);
        store = TestBed.inject(Store);
    });

    describe('get favourite list effect', () => {
        it('should trigger getFavouriteListSuccessAction on success', () => {
            jest.spyOn(api, 'getFavouriteList').mockReturnValue(of(favourites));

            actions$ = hot('-a', {
                a: FavouriteActions.getFavouriteListAction(),
            });
            const expected = cold('-b', {
                b: FavouriteActions.getFavouriteListSuccessAction({ favourites }),
            });
            const result = effects.getFavouriteList$;

            expect(result).toBeObservable(expected);
        });

        it('should trigger getFavouriteListFailAction on failure', () => {
            const error = 'error occurred';

            jest.spyOn(api, 'getFavouriteList').mockReturnValue(throwError(() => new Error(error)));
            actions$ = hot('-a', {
                a: FavouriteActions.getFavouriteListAction(),
            });
            const expected = cold('-b', {
                b: FavouriteActions.getFavouriteListFailAction(),
            });
            const result = effects.getFavouriteList$;

            expect(result).toBeObservable(expected);
        });
    });

    describe('add to favourites effect', () => {
        it('should trigger addToFavouritesSuccessAction on success', () => {
            jest.spyOn(api, 'addToFavourites').mockReturnValue(of());

            actions$ = hot('-a', {
                a: FavouriteActions.addToFavouritesAction({ dto: favouriteMock }),
            });
            const expected = cold('-b', {
                b: FavouriteActions.addToFavouritesSuccessAction(),
            });
            const result = effects.addToFavourites$;

            expect(result).toBeObservable(expected);
        });

        it('should trigger addToFavouritesFailAction on failure', () => {
            const error = 'error occurred';

            jest.spyOn(api, 'addToFavourites').mockReturnValue(throwError(() => new Error(error)));
            actions$ = hot('-a', {
                a: FavouriteActions.addToFavouritesAction({ dto: favouriteMock }),
            });
            const expected = cold('-b', {
                b: FavouriteActions.addToFavouritesFailAction(),
            });
            const result = effects.addToFavourites$;

            expect(result).toBeObservable(expected);
        });
    });

    describe('delete from favourites effect', () => {
        it('should trigger deleteFromFavouritesSuccessAction on success', () => {
            jest.spyOn(api, 'deleteFromFavourites').mockReturnValue(of());

            actions$ = hot('-a', {
                a: FavouriteActions.deleteFromFavouritesAction({ name: favouriteMock.name }),
            });
            const expected = cold('-b', {
                b: FavouriteActions.deleteFromFavouritesSuccessAction(),
            });
            const result = effects.deleteFromFavourites$;

            expect(result).toBeObservable(expected);
        });

        it('should trigger deleteFromFavouritesFailAction on failure', () => {
            const error = 'error occurred';

            jest.spyOn(api, 'deleteFromFavourites').mockReturnValue(throwError(() => new Error(error)));
            actions$ = hot('-a', {
                a: FavouriteActions.deleteFromFavouritesAction({ name: favouriteMock.name }),
            });
            const expected = cold('-b', {
                b: FavouriteActions.deleteFromFavouritesFailAction(),
            });
            const result = effects.deleteFromFavourites$;

            expect(result).toBeObservable(expected);
        });
    });
});
