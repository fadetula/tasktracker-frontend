import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusClass',
  standalone: true
})
export class StatusClassPipe implements PipeTransform {

  transform(status?: string): string {
    switch (status) {
      case 'not started':
        return 'badge rounded-pill bg-warning text-dark px-3 py-2';
      case 'done':
        return 'badge rounded-pill bg-success px-3 py-2';
      case 'in progress':
        return 'badge rounded-pill bg-primary px-3 py-2';
      default:
        return 'badge rounded-pill bg-secondary px-3 py-2';
    }
  }

}
