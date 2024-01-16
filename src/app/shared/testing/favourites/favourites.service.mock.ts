import { Observable, of } from 'rxjs';
import { Favourite } from '../../models/favourite.interface';

export class MockFavouriteService {

    public getFavouriteList(): Observable<Favourite[]> {
        return of([]);
    }

    public addToFavourites(name: string, steamId?: number, gogId?: number): Observable<void> {
        return of();
    }

    public deleteFromFavourites(name: string): Observable<void> {
        return of();
    }
}
