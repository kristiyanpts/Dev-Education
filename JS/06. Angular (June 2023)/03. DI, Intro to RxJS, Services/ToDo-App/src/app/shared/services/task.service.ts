import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  SERVICE_URL = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.SERVICE_URL);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.SERVICE_URL, task);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(this.SERVICE_URL + '/' + task.id, task);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.http.delete<Task>(this.SERVICE_URL + '/' + task.id);
  }
}
