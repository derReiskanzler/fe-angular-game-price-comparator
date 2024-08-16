
import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { of, switchMap } from 'rxjs';

export const IsLoggedInMatchGuard: CanMatchFn = () => {
  const auth = inject(AuthService);
  const token = localStorage.getItem('token') ?? '';

  return auth.getLoggedInUser().pipe(
    switchMap(user => {
      if (user.token !== token) {
        return of(false);
      } else {
        return of(true);
      }
    }),
  );
};
