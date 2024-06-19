import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  records: any[] = [];
  handleDelete(registro: any) {
    console.log('delete');
  }
  handleEdit(registro: any) {
    console.log('edit');
  }
}
