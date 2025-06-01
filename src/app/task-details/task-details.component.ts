import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Task } from '../task.model';
import { TaskService } from '../tasks/task.service';
import { StatusClassPipe } from "../status-class.pipe";

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, RouterModule, StatusClassPipe],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  task: Task | undefined;


  constructor(private route: ActivatedRoute, private taskService: TaskService) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTaskById(id).subscribe(data => {
        this.task = data;
      });
    }
  }

}
