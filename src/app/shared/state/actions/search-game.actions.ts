import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game.interface';

export const searchGameAction = createAction(
    '[SEARCH] search game',
    props<{ search: string }>(),
);

export const searchGameSuccessAction = createAction(
    '[SEARCH] search game success',
    props<{ results: Game[] }>(),
);

export const searchGameFailAction = createAction(
    '[SEARCH] search game fail',
    props<{ error: string }>(),
);

export const resetSearchAction = createAction('[SEARCH] reset search');

export const selectGameAction = createAction('[SEARCH] select game', props<{ game: Game }>());

export const resetSelectedGameAction = createAction('[GAME PAGE] reset selected game');