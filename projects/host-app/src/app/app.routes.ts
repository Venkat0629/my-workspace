import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'todo-list',
        loadChildren: () => loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            exposedModule: './TodoListModule'
        }).then(m => {
            console.log('Loaded remote module', m);
            return m.TodoListModule;
        }).catch(err => {
            console.error('Error loading remote module', err);
        }),
    },
];
