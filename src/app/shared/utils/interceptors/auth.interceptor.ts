import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (request, next) => {
  const token = localStorage.getItem('token');

  if (token && request.url.includes('api/v1/auth/user')) {
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : '',
      },
    });
  }
  
  return next(request);
};