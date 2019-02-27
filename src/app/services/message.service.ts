import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageSubject = new Subject();

  constructor() { }

  setMsg(msg: any): void {
    this.messageSubject.next(msg);
  }

  getMsg(): Observable<any> {
    return this.messageSubject.asObservable();
  }
}
