import { Component } from '@angular/core';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TODOType } from '../../types';

@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [TodoListComponent, TodoFormComponent],
  templateUrl: './todo-app.component.html',
  styleUrl: './todo-app.component.css',
})
export class TodoAppComponent {
  createdRecord!: TODOType;
  currentRecordToUpdate!: TODOType;
  onCreatedRecord(registro: TODOType): void {
    this.createdRecord = registro;
    this.currentRecordToUpdate = null;
  }
  onCurrentRecordToUpdate(registro: TODOType): void {
    this.currentRecordToUpdate = registro;
  }
}
