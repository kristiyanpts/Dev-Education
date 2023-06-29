import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/services/task.service';
import { Task } from '../shared/models/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  allTasks: Task[] = [];
  isLoading = true;

  ngOnInit(): void {
    this.allTasks = [];
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]): void => {
      this.allTasks = tasks;
      this.isLoading = false;
    });
  }

  editTask(task: Task): void {
    task.title += 'Edited';
    this.taskService.editTask(task).subscribe({
      error: (err) => console.error(err),
      complete: () => this.ngOnInit(),
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe({
      error: (err) => console.error(err),
      complete: () => {
        console.log(this.allTasks.find((t) => t.title == task.title));
        this.ngOnInit();
      },
    });
  }
}
