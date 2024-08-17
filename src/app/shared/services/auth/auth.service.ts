import { Injectable, signal, inject } from '@angular/core';
import { LoginUserDto } from '../../dtos/login-user.dto';
import { RegisterUserDto } from '../../dtos/register-user.dto';
import { User } from '../../models/user.interface';
import { NEVER, Observable, catchError, map, tap, throwError } from 'rxjs';
import { AuthWebService } from '../../api/services/auth/auth.web.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public readonly currentUserSig = signal<Partial<User> | null>(null);
  public readonly isLoadingSig = signal<boolean>(false);
  public readonly errorMessage = signal<string|null>(null);

  private readonly api = inject(AuthWebService);
  private readonly messageService = inject(MessageService);

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
          this.isLoadingSig.set(false);
          this.errorMessage.set(err.error?.message);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error?.message ?? 'Something went wrong while you were logging in.',
          });

          return throwError(() => err);
        }),
      );
  }
  
  public register({ email, nickname, password }: RegisterUserDto): Observable<User> {
    this.isLoadingSig.set(true);

    return this.api.register(email, nickname, password)
      .pipe(
        map(({ token }) => ({ email, token, nickname})),
        tap(user => {
          localStorage.setItem('token', user.token);
          this.currentUserSig.set(user);
          this.isLoadingSig.set(false);
        }),
        catchError((err: HttpErrorResponse) => {
          this.isLoadingSig.set(false);
          this.errorMessage.set(err.error?.message);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error?.message ?? 'Something went wrong while you were logging in.',
          });
          
          return throwError(() => err);
        }),
      );
  }

  public getLoggedInUser(): Observable<User> {
    this.isLoadingSig.set(true);

    return this.api.getLoggedInUser()
      .pipe(
        map(({ email, nickname, token }) => ({
          email,
          nickname,
          token,
        } as User)),
        tap(user => {
          this.currentUserSig.set(user);
          this.isLoadingSig.set(false);
        }),
        catchError((err: HttpErrorResponse) => {
          this.isLoadingSig.set(false);
          this.currentUserSig.set(null);
          this.errorMessage.set(err.error?.message);
          localStorage.removeItem('token');
          
          return NEVER;
        }),
      );
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
  }
}
