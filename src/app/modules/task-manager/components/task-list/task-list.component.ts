import { Component, OnInit } from '@angular/core';

import { Task } from '../../../../models/task';
import { TaskService } from '../../../../services/task.service';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];

  constructor(
    private taskService: TaskService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.messageService.getMsg().subscribe((data) => {
      // this.getTasks();
      if (typeof data.task !== 'undefined') {
        this.tasks.push(data.task);
      } else {
        this.getTasks();
      }
    });
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      this.tasks = data;
    });
  }
}
