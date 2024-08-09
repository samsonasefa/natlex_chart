import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/view-mode',
    pathMatch: 'full',
  },
  {
    path: 'view-mode',
    loadComponent: () =>
      import('./pages/view-mode/view-mode.component').then(
        (e) => e.ViewModeComponent
      ),
    title: 'Natlex - charts',
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (e) => e.SettingsComponent
      ),
    title: 'Natlex charts settings',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
