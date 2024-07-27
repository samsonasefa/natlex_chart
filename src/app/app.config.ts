import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStore, StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment.development';
import { chartsReducer } from './state/charts.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideStore(),
    importProvidersFrom(
      StoreModule.forRoot({
        charts: chartsReducer,
      })
    ),
    environment.providers,
  ],
};
