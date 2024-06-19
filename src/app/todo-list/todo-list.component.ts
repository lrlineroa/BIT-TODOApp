import { NgFor, NgIf } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() newTODO!: any;
  records: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log(
      'A change detected from todo list: ',
      changes['newTODO'].currentValue
    );

    if (changes['newTODO'] && changes['newTODO'].currentValue) {
      this.records.push(changes['newTODO'].currentValue);
    }
  }

  handleDelete(registro: any) {
    console.log('delete');
  }
  handleEdit(registro: any) {
    console.log('edit');
  }
}
