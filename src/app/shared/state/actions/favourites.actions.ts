import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game.interface';

export const loadFavouriteListAction = createAction(
    '[FAVOURITES] load favourite list',
);

export const loadFavouriteListSuccessAction = createAction(
    '[FAVOURITES] load favourite list success',
    props<{ favourites: Game[] }>(),
);

export const loadFavouriteListFailAction = createAction(
    '[FAVOURITES] load favourite list fail',
    props<{ error: string }>(),
);

export const addToFavouritesAction = createAction(
    '[FAVOURITES] add to favourites',
    props<{ game: Game }>(),
);

export const addToFavouritesSuccessAction = createAction(
    '[FAVOURITES] add to favourites success',
    props<{ game: Game }>(),
);

export const addToFavouritesFailAction = createAction(
    '[FAVOURITES] add to favourites fail',
    props<{ error: string }>(),
);

export const deleteFromFavouritesAction = createAction(
    '[FAVOURITES] delete from favourites',
    props<{ name: string }>(),
);

export const deleteFromFavouritesSuccessAction = createAction(
    '[FAVOURITES] delete from favourites success',
    props<{ name: string }>(),
);

export const deleteFromFavouritesFailAction = createAction(
    '[FAVOURITES] delete from favourites fail',
    props<{ error: string }>(),
);