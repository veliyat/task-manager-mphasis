import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  taskInputInvalid: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  taskInputToggle(invalid: boolean) {
    this.taskInputInvalid = invalid;
  }

  canDeactivate() {
    return this.taskInputInvalid;
  }
}
