import { Observable, of } from 'rxjs';
import { ApiGame } from '../../api/models/api-game.interface';

export class MockFavouriteWebService {
    public getFavouriteList(): Observable<ApiGame[]> {
        return of([]);
    }

    public addToFavourites(name: string, steamId?: number, gogId?: number): Observable<void> {
        return of(void 0);
    }

    public deleteFromFavourites(name: string): Observable<void> {
        return of(void 0);
    }
}
