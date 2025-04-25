import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TriviaPage } from './trivia/trivia.page';
import { FlagsPage } from './flags/flags.page';
import { SettingsPage } from './settings/settings.page';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'trivia', component: TriviaPage },
  { path: 'flags', component: FlagsPage },
  { path: 'settings', component: SettingsPage },


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
