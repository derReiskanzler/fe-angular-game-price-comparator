import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('token');
  const auth = inject(AuthService);

  if (
    token && request.url.includes('api/v1/auth/user') ||
    token && request.url.includes('api/v1/favorite') ||
    token && request.url.includes('api/v1/games')
  ) {
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  }

  return next(request);
};