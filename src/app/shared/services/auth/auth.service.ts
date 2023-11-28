import { Injectable, signal } from '@angular/core';
import { LoginUserDto } from '../../dtos/login-user.dto';
import { RegisterUserDto } from '../../dtos/register-user.dto';
import { User } from '../../models/user.interface';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUserSig = signal<User | null>(null);

  constructor(
  ) {}

  public login(dto: LoginUserDto): void {
    // TODO: implement login & set token in storage & set user as signal
    localStorage.setItem('token', dto.email);
    this.currentUserSig.set({
      email: 'test@email.com',
      token: 'rfddafsvd',
      nickname: 'nickname',
    });
    console.log('login', dto);
  }
  
  public register(dto: RegisterUserDto): void {
    // TODO: implement register & set token in storage & set user as signal
    localStorage.setItem('token', dto.email);
    this.currentUserSig.set({
      email: 'test@email.com',
      token: 'rfddafsvd',
      nickname: 'nickname',
    });
    console.log('register', dto);
  }

  public logout(): void {
    // TODO: implement logout
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
  }
}
