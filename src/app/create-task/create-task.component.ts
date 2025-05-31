import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { TaskService } from '../tasks/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  task: Partial<Task> = {
    title: '',
    description: '',
    dueDate: '',
    status: 'not started'
  };

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit() {
    this.taskService.createTask(this.task as Task).subscribe(() => {
      this.router.navigate(['/']); // Go back to the task list
    });
  }

}
