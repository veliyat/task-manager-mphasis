import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskManagerRoutingModule } from './task-manager-routing.module';
import { MaterialModule } from '../../material.module';

import { TaskManagerComponent } from './task-manager.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskItemComponent } from './components/task-list/task-item/task-item.component';
import { SearchPipe } from './pipes/search.pipe';
import { CompletedDirective } from './directives/completed.directive';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { TaskNotSavedGuard } from './guards/task-not-saved.guard';


@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskItemComponent,
    SearchPipe,
    CompletedDirective,
    MyUppercasePipe
  ],
  providers: [
    TaskNotSavedGuard
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskManagerRoutingModule,
    MaterialModule
  ]
})
export class TaskManagerModule { }