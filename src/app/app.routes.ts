import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent }  
];
