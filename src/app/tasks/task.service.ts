import { Injectable } from '@angular/core';
import { Task } from '../task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [
    {
      id: '1',
      title: 'Finish Angular setup',
      description: 'Set up routing and display mock tasks.',
      dueDate: '2025-06-01',
      status: 'in progress'
    },
    {
      id: '2',
      title: 'Prepare README',
      description: 'Write project documentation.',
      dueDate: '2025-06-02',
      status: 'not started'
    },
    {
      id: '3',
      title: 'Connect to backend',
      description: 'Set up HTTP calls to Spring Boot API.',
      dueDate: '2025-06-03',
      status: 'not started'
    }
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(t => t.id === id);
  }

}
