import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginApiResponse } from '../../models/login-api-response.interface';
import { RegisterApiResponse } from '../../models/reigster-api-response.interface';
import { UserResponse } from '../../models/user-api-response.interface';
import { EnvironmentService } from '../../../services/environment/environment.service';

@Injectable({ providedIn: 'root' })
export class AuthWebService {
  private readonly envService = inject(EnvironmentService);
  private readonly http = inject(HttpClient);

  public login(email: string, password: string): Observable<LoginApiResponse> {
    return this.http.post<LoginApiResponse>(`${this.envService.apiBaseUrl}/v1/auth/login`, { email, password });
  }
  
  public register(email: string, nickname: string, password: string): Observable<RegisterApiResponse> {
    return this.http.post<RegisterApiResponse>(`${this.envService.apiBaseUrl}/v1/auth/register`, { email, nickname, password });
  }
  
  public getLoggedInUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.envService.apiBaseUrl}/v1/auth/user`);
  }
}
