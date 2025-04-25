import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'flags',
    loadComponent: () => import('./flags/flags.page').then( m => m.FlagsPage)
  },
  {
    path: 'trivia',
    loadComponent: () => import('./trivia/trivia.page').then( m => m.TriviaPage)
  },
  {
    path: 'triviasettings',
    loadComponent: () => import('./triviasettings/triviasettings.page').then( m => m.TriviasettingsPage)
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
];
