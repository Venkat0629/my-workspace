import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            exposedModule: './HomeModule'
        }).then(m => {
            console.log('Loaded remote module', m);
            return m.HomeModule;
        }).catch(err => {
            console.error('Error loading remote module', err);
        }),
    }
];
