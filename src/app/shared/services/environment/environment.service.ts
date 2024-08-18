import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  get apiBaseUrl(): string {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const env = (window as any)['env'];
    console.log(env)
    return env['API_BASE_URL'] || 'http://localhost:8080/api';
  }

  get environment(): string {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (window as any)['env']['ENV'] || 'local';
  }
}
