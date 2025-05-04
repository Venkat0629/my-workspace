import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Task } from "../common/app.task";
import { Component, Input } from "@angular/core";
import { AppService } from "../common/app.service";

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
    status: false
  };

  @Input({ required: true }) tasks: Task[] = [];
  constructor(private appService: AppService) { }


  activeAccordionIndex: number | null = null;

  toggleAccordion(index: number): void {
    this.activeAccordionIndex = this.activeAccordionIndex === index ? null : index;
  }

  toggleCompletion(taskId: number, status: boolean) {
    const user: any = this.getUser();
    this.appService.updateTask(user.userId, user.token, taskId, !status).subscribe({
      next: (response) => {
        this.tasks = response?.tasks || [];
      },
      error: (error) => {
        alert('Failed to update user task!');
        console.error(error);
      }
    });
  }

  addTask() {
    if (this.task.title.trim() && this.task.description.trim()) {
      const newTask: Task = {
        id: this.tasks.length > 0 ? Math.max(...this.tasks.map((t: Task) => t.id)) + 1 : 1,
        title: this.task.title,
        description: this.task.description,
        status: false
      };
      this.tasks.push(newTask);
      const user: any = this.getUser();
      this.appService.addTask(user.userId, user.token, newTask).subscribe({
        next: (response) => {
          this.tasks = response?.tasks || [];
        },
        error: (error) => {
          alert('Failed to add user task!');
          console.error(error);
        }
      });
      this.task = { id: 0, title: '', description: '', status: false };
    }
  }

  deleteUserTask(taskId: number) {
    const user: any = this.getUser();
    this.appService.deleteTask(user.userId, user.token, taskId).subscribe({
      next: (response) => {
        this.tasks = response?.tasks || [];
      },
      error: (error) => {
        alert('Failed to delete user task!');
        console.error(error);
      }
    });
  }

  getUser() {
    const user: any = JSON.parse(localStorage.getItem('user') || '{}');
    return user;
  }

  public get completedTasksCount(): number {
    return this.tasks.filter(t => t.status).length;
  }
  public get inCompleteTaskCount(): number {
    return this.tasks.filter(t => !t.status).length;
  }

  public get getTasks(): Task[] {
    return [...this.tasks].sort((a, b) => b.id - a.id);
  }
}
