import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  get apiBaseUrl(): string {
    console.log(window.ENV.API_BASE_URL);
    return window.ENV.API_BASE_URL;
  }
}
