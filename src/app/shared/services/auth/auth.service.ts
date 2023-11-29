import { Injectable, signal } from '@angular/core';
import { LoginUserDto } from '../../dtos/login-user.dto';
import { RegisterUserDto } from '../../dtos/register-user.dto';
import { User } from '../../models/user.interface';
import { MessageService } from 'primeng/api';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public currentUserSig = signal<User | null>(null);

  constructor(
    // private httpClient: HttpClientService,
    private messageService: MessageService,
  ) {}

  public login(dto: LoginUserDto): void {
    // TODO: implement login (return something, so it can be reacted on in FE) & set token in storage & set user as signal
    localStorage.setItem('token', dto.email);
    this.currentUserSig.set({
      email: 'test@email.com',
      token: 'rfddafsvd',
      nickname: 'nickname',
    });
    console.log('login', dto);
    // this.httpClient.login()
    //   .pipe(
    //     takeUntilDestroyed(),
    //     catchError(err => {
    //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong while you were logging in.' });
    //       return 
    //     }),
    //   )
    //   .subscribe(user => {
    //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You are logged in now!' });
    //   });
  }
  
  public register(dto: RegisterUserDto): void {
    // TODO: implement register (return something, so it can be reacted on in FE) & set token in storage & set user as signal
    localStorage.setItem('token', dto.email);
    this.currentUserSig.set({
      email: 'test@email.com',
      token: 'rfddafsvd',
      nickname: 'nickname',
    });
    console.log('register', dto);
    // this.httpClient.register()
    //   .pipe(
    //     takeUntilDestroyed(),
    //     catchError(err => {
    //       this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong while you were registering.' });
    //       return 
    //     }),
    //   )
    //   .subscribe((user: User) => {
    //     this.messageService.add({ severity: 'success', summary: 'Success', detail: 'You have successfully registered!' });
    //   });
  }

  public logout(): void {
    // TODO: implement logout
    localStorage.removeItem('token');
    this.currentUserSig.set(null);
  }

  // TODO: implement method to check if token is expired or add expiry date in currentUserSig
  // for auth guard use case/profile page
}
