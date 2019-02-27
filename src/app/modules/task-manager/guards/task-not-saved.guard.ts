import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskManagerComponent } from '../task-manager.component';

@Injectable({
  providedIn: 'root'
})
export class TaskNotSavedGuard implements CanDeactivate<TaskManagerComponent> {
  canDeactivate(
    component: TaskManagerComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate() || confirm('The changes might not be saved. Are you sure?');
  }
}
