import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TodoListModule } from './todo-list/todo-list.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, TodoListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe-app';
}
