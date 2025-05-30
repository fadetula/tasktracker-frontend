import { Component } from '@angular/core';
import { Task } from '../task.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // Define an array of mock tasks
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

}
