import { Component, Output, OnInit, EventEmitter } from '@angular/core';

import { TaskService } from '../../../../services/task.service';
import { MessageService } from '../../../../services/message.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Output() taskInput = new EventEmitter;
  model: any = {};

  constructor(
    private taskService: TaskService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }

  handleInput(task) {
    this.taskInput.emit(task.invalid);
  }

  addTask() {
    this.taskService.addTask(this.model.task).subscribe((data) => {
      this.messageService.setMsg({ msg: 'Task Added!', type: 'success', task: data });
      this.model.task = '';
    });
  }

}
