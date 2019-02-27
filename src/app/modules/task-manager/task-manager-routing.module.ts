import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskManagerComponent } from './task-manager.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TaskNotSavedGuard } from './guards/task-not-saved.guard';

const routes: Routes = [
    {
        path: '',
        component: TaskManagerComponent,
        canActivate: [AuthGuard],
        canDeactivate: [TaskNotSavedGuard]
    },
    { path: ':id', component: TaskDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TaskManagerRoutingModule { }