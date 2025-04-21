import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'todo-list', loadChildren: () => loadRemoteModule({
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            remoteName: 'mfeApp',
            exposedModule: './TodoListModule'
        }).then(m => m.TodoModule).catch(err => {
            console.error('Error loading remote module', err);
            throw err;
        }),
    },
];