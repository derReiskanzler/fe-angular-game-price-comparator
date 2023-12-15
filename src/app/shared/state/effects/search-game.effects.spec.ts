import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action, Store } from '@ngrx/store';
import { cold, hot } from 'jest-marbles';
import * as SearchGameActions from '../actions/search-game.actions';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, of, throwError } from 'rxjs';
import { SearchGameService } from '../../services/search-game/search-game.service';
import { SearchGameEffects } from './search-game.effects';
import { MockSearchGameService } from '../../testing/search/search-game.service.mock';
import { intialSearchGameState } from '../reducers/search-game.reducer';
import { Game } from '../../models/game.interface';
import { gameMock } from '../../testing/search/game.mock';

describe('SearchGame Effects', () => {
    let actions$ = new Observable<Action>();
    let api: SearchGameService;
    let effects: SearchGameEffects;
    let store: Store;

    const results: Game[] = [ gameMock ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                SearchGameEffects,
                {
                    provide: SearchGameService,
                    useClass: MockSearchGameService,
                },
                provideMockActions(() => actions$),
                provideMockStore({ initialState: intialSearchGameState }),
            ],
        });
        api = TestBed.inject(SearchGameService);
        effects = TestBed.inject(SearchGameEffects);
        store = TestBed.inject(Store);
    });

    describe('search game effect', () => {
        const search = 'the witcher';

        it('should trigger SearchGameSuccessAction on success', () => {
            jest.spyOn(api, 'searchGame').mockReturnValue(of(results));

            actions$ = hot('-a', {
                a: SearchGameActions.searchGameAction({ search }),
            });
            const expected = cold('-b', {
                b: SearchGameActions.searchGameSuccessAction({ results }),
            });
            const result = effects.searchGame$;

            expect(result).toBeObservable(expected);
        });

        it('should trigger SearchGameFailAction on failure', () => {
            const error = 'error occurred';

            jest.spyOn(api, 'searchGame').mockReturnValue(throwError(() => new Error(error)));
            actions$ = hot('-a', {
                a: SearchGameActions.searchGameAction({ search }),
            });
            const expected = cold('-b', {
                b: SearchGameActions.searchGameFailAction({ error }),
            });
            const result = effects.searchGame$;

            expect(result).toBeObservable(expected);
        });
    });
});
