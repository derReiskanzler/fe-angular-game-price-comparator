
import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const IsLoggedIn: CanMatchFn = (route, state) => {
  const auth = inject(AuthService);
  const token = localStorage.getItem('token') ?? '';

  if (!token || token !== auth.currentUserSig()?.token) {
    return false;
  } else {
    return true;
  }
};
