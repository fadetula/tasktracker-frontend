import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'tasks/:id', component: TaskDetailsComponent },
  { path: 'create', component: CreateTaskComponent },
  { path: 'tasks/edit/:id', component: EditTaskComponent }
];
