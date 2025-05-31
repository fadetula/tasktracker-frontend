import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../task.model';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService } from '../tasks/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute, 
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.taskService.getTaskById(id).subscribe(data => {
        this.task = data;
       });
    }
  }

  onSubmit() {
    if (this.task) {
      this.taskService.updateTask(this.task).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

}
