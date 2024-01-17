import { Observable, of } from 'rxjs';
import { Game } from '../../models/game.interface';

export class MockFavouriteService {

    public getFavouriteList(): Observable<Game[]> {
        return of([]);
    }

    public addToFavourites(name: string, steamId?: number, gogId?: number): Observable<void> {
        return of(void 0);
    }

    public deleteFromFavourites(name: string): Observable<void> {
        return of(void 0);
    }
}
