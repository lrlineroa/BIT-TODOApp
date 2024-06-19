import { Component } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {
  createdRecord: any;
  currentRecordToUpdate: any;
  onCreatedRecord(registro: any): void {
    this.createdRecord = registro;
  }
  onCurrentRecordToUpdate(registro: any): void {
    this.currentRecordToUpdate = registro;
  }
}
