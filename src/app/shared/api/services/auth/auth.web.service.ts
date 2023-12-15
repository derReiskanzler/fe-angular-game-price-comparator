import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginApiResponse } from '../../models/login-api-response.interface';
import { RegisterApiResponse } from '../../models/reigster-api-response.interface';
import { UserResponse } from '../../models/user-response.interface';

@Injectable({ providedIn: 'root' })
export class AuthWebService {
  private basePath = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  public login(email: string, password: string): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>(`${this.basePath}/v1/auth/login`, { email, password });
  }
  
  public register(email: string, nickname: string, password: string): Observable<RegisterApiResponse> {
    return this.http.post<RegisterApiResponse>(`${this.basePath}/v1/auth/register`, { email, nickname, password });
  }
  
  public getLoggedInUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.basePath}/v1/auth/user`);
  }
}
