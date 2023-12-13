import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from '../../models/user-response.model';

@Injectable({ providedIn: 'root' })
export class UserWebService {
  private basePath = 'http://localhost:8080/api';
  private http = inject(HttpClient);

  public getLoggedInUser(): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.basePath}/v1/user`);
  }
  }
