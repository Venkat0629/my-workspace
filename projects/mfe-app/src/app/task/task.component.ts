import { Component, Input } from '@angular/core';
import { Task } from '../common/app.task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CommonModule, FormsModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false
  };
  @Input({ required: true }) tasks: Task[] = [];

  constructor() { }

  toggleCompletion(id: number) {
    this.task.completed = !this.task.completed;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    console.log('Task deleted:', this.task.id);
  }
}
