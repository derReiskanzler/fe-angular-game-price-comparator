import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  get apiBaseUrl(): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(window['env'].API_BASE_URL);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    console.log(window['env']['API_BASE_URL']);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return window['env']['API_BASE_URL'] || window['env'].API_BASE_URL;
  }
}
