import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = 'http://localhost:3000/tasks'; // This should come from a separate config file.

  tasks: Task[] = [];

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  getSingleTask(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/${id}`);
  }

  addTask(taskTitle: string): Observable<Task> {
    const data = {
      title: taskTitle,
      completed: false,
      date: new Date()
    };

    return this.http.post<Task>(this.apiUrl, data);
  }

  removeTask(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }
}
