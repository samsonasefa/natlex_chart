import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideStore,
  ActionReducer,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { environment } from '../environments/environment.development';
import { chartsReducer } from './state/charts.reducer';
import { provideHttpClient } from '@angular/common/http';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['charts'], rehydrate: true })(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [
  localStorageSyncReducer,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore(),
    provideHttpClient(),
    importProvidersFrom(
      StoreModule.forRoot(
        {
          charts: chartsReducer,
        },
        { metaReducers }
      )
    ),
    environment.providers,
  ],
};
