import { Observable, of } from 'rxjs';
import { ApiGame } from '../../api/models/api-game.interface';

export class MockSearchGameWebService {
    public searchGame(search: string): Observable<ApiGame[]> {
        return of([]);
    }
}
