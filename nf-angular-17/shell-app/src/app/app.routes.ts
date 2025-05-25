import { Routes } from '@angular/router';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  // Add this route:
  {
    path: 'remote-component',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'remote-module',
    loadChildren: () =>
      loadRemoteModule('mfe2', './Module').then((m) => m.RemoteModule),
  },
];
