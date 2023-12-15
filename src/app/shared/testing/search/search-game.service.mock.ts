import { Observable, of } from 'rxjs';
import { Game } from '../../models/game.interface';

export class MockSearchGameService {
    public searchGame(search: string): Observable<Game[]> {
        return of();
    }
}
