import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeModule } from './home/home.module';
import { TaskModule } from './task/task.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, HomeModule, TaskModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfe-app';
}
