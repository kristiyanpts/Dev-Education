import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/services/task.service';
import { Task } from '../shared/models/task';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent {
  constructor(private taskService: TaskService) {}

  addTask(taskInput: HTMLInputElement) {
    let newTask = new Task();
    newTask.title = taskInput.value;
    this.taskService.addTask(newTask).subscribe({
      error: (err) => console.error(err),
      complete: () => location.reload(),
    });
    taskInput.value = '';
  }
}
