import { Observable, of } from 'rxjs';
import { ApiFavourite } from '../../api/models/api-favourite.interface';

export class MockFavouriteWebService {
    public getFavouriteList(): Observable<ApiFavourite[]> {
        return of([]);
    }

    public addToFavourites(name: string, steamId?: number, gogId?: number): Observable<void> {
        return of();
    }

    public deleteFromFavourites(name: string): Observable<void> {
        return of();
    }
}
