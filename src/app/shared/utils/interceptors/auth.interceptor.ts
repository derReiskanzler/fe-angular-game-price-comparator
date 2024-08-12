import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('token');

  if (
    token && request.url.includes('api/v1/auth/user') ||
    token && request.url.includes('api/v1/favorite') ||
    token && request.url.includes('api/v1/games')
  ) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return next(request);
};