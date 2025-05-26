import { Routes } from '@angular/router';

// Add this import:
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  // Add this route:
  {
    path: 'remote-component',
    loadChildren: () =>
      loadRemoteModule('mfe1', './routes').then((m) => m.routes),
  },
  {
    path: 'remote-module',
    loadChildren: () =>
      loadRemoteModule('mfe2', './Module').then((m) => m.RemoteModule),
  },
];
