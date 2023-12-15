
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('token') ?? '';

  // TODO: check if token is expired
  if (!token) {
    router.navigate(['/home']);
    return false;
  } else {
    return true;
  }
};
