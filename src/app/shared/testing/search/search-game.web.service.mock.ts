import { Observable, of } from 'rxjs';
import { SearchGameApiResponse } from '../../api/models/search-game-api-response.interface';

export class MockSearchGameWebService {
    public searchGame(search: string): Observable<SearchGameApiResponse> {
        return of({ data: [] });
    }
}
