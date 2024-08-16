
import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { SearchGameFacadeService } from '../../state/facade/search-game.facade.service';
import { catchError, of, switchMap } from 'rxjs';

export const HasGameSelectedMatchGuard: CanMatchFn = () => {
  const queryParams = inject(Router).getCurrentNavigation()?.initialUrl.queryParams;
  if (queryParams && !queryParams['name'] ) {
    return false;
  }

  return inject(SearchGameFacadeService).selectedGame$
    .pipe(
      switchMap(selectedGame => {
        if (!selectedGame.name) {
          return of(false);
        } else {
          return of(true);
        }
      }),
      catchError(() => of(false))
    );
};
