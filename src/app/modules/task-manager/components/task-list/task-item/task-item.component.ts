import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';

import { TaskService } from '../../../../../services/task.service';
import { MessageService } from '../../../../../services/message.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input('taskItem') task: Task;

  constructor(
    private taskService: TaskService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  handleDelete() {
    this.taskService.removeTask(this.task.id).subscribe(() => {
      this.messageService.setMsg({ msg: 'Task Deleted!', type: 'success' });
    });
  }

}
