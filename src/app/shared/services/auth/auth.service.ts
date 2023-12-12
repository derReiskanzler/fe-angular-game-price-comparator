import { Injectable, signal, inject } from '@angular/core';
import { LoginUserDto } from '../../dtos/login-user.dto';
import { RegisterUserDto } from '../../dtos/register-user.dto';
import { User } from '../../models/user.interface';
import { NEVER, Observable, catchError, map, tap } from 'rxjs';
import { AuthWebService } from '../../api/services/auth/auth.web.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUserSig = signal<Partial<User> | null>(null);
  public isLoadingSig = signal<boolean>(false);
  public errorMessage = signal<string|null>(null);

  private api = inject(AuthWebService);

  public login({ email, password }: LoginUserDto): Observable<User> {
    this.isLoadingSig.set(true);
    
    return this.api.login(email, password)
      .pipe(
        map(({ token, nickname }) => ({ email, token, nickname})),
        tap(user => {
          localStorage.setItem('token', user.token);
          this.currentUserSig.set(user);
          this.isLoadingSig.set(false);
        }),
        catchError((err: HttpErrorResponse) => {
          this.errorMessage.set(err.error?.errorMessage);
          return NEVER;
        }),
      );
  }
  
  public register({ email, nickname, password }: RegisterUserDto): Observable<User> {
    return this.api.register(email, nickname, password)
      .pipe(
        map(({ token }) => ({ email, token, nickname})),
        tap(user => {
          localStorage.setItem('token', user.token);
          this.currentUserSig.set(user);
          this.isLoadingSig.set(false);
        }),
        catchError((err: HttpErrorResponse) => {
          this.errorMessage.set(err.error?.errorMessage);
          return NEVER;
        }),
      );
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
  }

  // TODO: implement method to check if token is expired or add expiry date in currentUserSig
  // for auth guard use case/profile page
}
