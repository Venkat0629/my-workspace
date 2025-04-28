import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { TodoListComponent } from './todo-list/todo-list.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'todo-list', component: TodoListComponent },
    { path: 'task', component: TaskComponent },
];
