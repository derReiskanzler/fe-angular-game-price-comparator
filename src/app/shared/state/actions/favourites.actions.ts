import { createAction, props } from '@ngrx/store';
import { AddToFavouritesDto } from '../../dtos/add-to-favourites.dto';
import { Favourite } from '../../models/favourite.interface';

export const getFavouriteListAction = createAction('[FAVOURITES] get favourite list');

export const getFavouriteListSuccessAction = createAction(
    '[FAVOURITES] get favourite list success',
    props<{ favourites: Favourite[] }>(),
);

export const getFavouriteListFailAction = createAction('[FAVOURITES] get favourite list fail');


export const addToFavouritesAction = createAction(
    '[FAVOURITES] add to favourites',
    props<{ dto: AddToFavouritesDto }>()
);

export const addToFavouritesSuccessAction = createAction('[FAVOURITES] add to favourites success');

export const addToFavouritesFailAction = createAction('[FAVOURITES] add to favourites fail');


export const deleteFromFavouritesAction = createAction(
    '[FAVOURITES] delete from favourites',
    props<{ name: string }>()
);

export const deleteFromFavouritesSuccessAction = createAction('[FAVOURITES] delete from favourites success');

export const deleteFromFavouritesFailAction = createAction('[FAVOURITES] delete from favourites fail');