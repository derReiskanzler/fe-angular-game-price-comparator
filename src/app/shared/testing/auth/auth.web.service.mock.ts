import { Observable, of } from 'rxjs';
import { LoginApiResponse } from '../../api/models/login-api-response.interface';
import { RegisterApiResponse } from '../../api/models/reigster-api-response.interface';
import { UserResponse } from '../../api/models/user-response.interface';

export class MockAuthWebService {
    public login(email: string, password: string): Observable<LoginApiResponse> {
        return of({ token: 'token', nickname: 'nickname'});
    }
    public register(email: string, nickname: string, password: string): Observable<RegisterApiResponse> {
        return of({ enail:'email', token: 'token', nickname: 'nickname'});
    }
    public getLoggedInUser(): Observable<UserResponse> {
        return of({ email: 'email', nickname: 'nickname'});
    }
}
