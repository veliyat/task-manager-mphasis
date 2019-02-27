import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';

import { TaskService } from '../../../../services/task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task: Task = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.getSingleTask();
  }

  getSingleTask() {
    const id = this.route.snapshot.params.id;

    this.taskService.getSingleTask(id).subscribe(data => {
      this.task = data;
    });

    // this.route.params.subscribe(data => {
    //   console.log(data);
    // });
  }

}
