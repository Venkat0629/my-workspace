import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: 'task',
      loadChildren: () => import('./task.component').then(m => m.TaskComponent)
    }])
  ]
})
export class TaskModule { }
