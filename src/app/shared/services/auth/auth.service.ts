import { Injectable, signal, inject } from '@angular/core';
import { LoginUserDto } from '../../dtos/login-user.dto';
import { RegisterUserDto } from '../../dtos/register-user.dto';
import { User } from '../../models/user.interface';
import { Observable, of, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUserSig = signal<User | null>(null);

  // private httpClient = inject(HttpClientService);

  public login(dto: LoginUserDto): Observable<User> {
    // TODO: implement login (return something, so it can be reacted on in FE) & set token in storage & set user as signal
    const mockUser = {
      email: 'test@email.com',
      token: 'rfddafsvd',
      nickname: 'nickname',
    };
    localStorage.setItem('token', dto.email);
    this.currentUserSig.set(mockUser);
    console.log('login', dto);
    return of(mockUser);
    // return this.httpClient.login();
  }
  
  public register(dto: RegisterUserDto): Observable<User> {
    // TODO: implement register (return something, so it can be reacted on in FE) & set token in storage & set user as signal
    const mockUser = {
      email: 'test@email.com',
      token: 'rfddafsvd',
      nickname: 'nickname',
    };
    localStorage.setItem('token', dto.email);
    this.currentUserSig.set(mockUser);
    console.log('register', dto);
    return of(mockUser);
    // return this.httpClient.register();
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
  }

  // TODO: implement method to check if token is expired or add expiry date in currentUserSig
  // for auth guard use case/profile page
}
