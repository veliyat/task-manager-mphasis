import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../../services/message.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  msgObj: any = {};

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMsg().subscribe((data) => {
      this.msgObj = data;

      setTimeout(() => {
        this.msgObj = {};
      }, 3000);
    });
  }
}
