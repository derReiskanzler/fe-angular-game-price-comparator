
import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const hasGameSelected: CanMatchFn = (route, state) => {
  const queryParams = inject(Router).getCurrentNavigation()?.initialUrl.queryParams
  if (queryParams && !queryParams['name']) {
    return false;
  } else {
    return true;
  }
};
