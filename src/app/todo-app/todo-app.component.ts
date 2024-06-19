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
  onCreatedRecord(registro: any): void {
    console.log('Nuevo registro en PageContactComponent:', registro);
    this.createdRecord = registro;
  }
}
