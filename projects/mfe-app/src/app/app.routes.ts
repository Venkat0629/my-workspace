import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, 
    { path: 'home', component: HomeComponent },
    { path: 'todo-list', component: TodoListComponent }
];
