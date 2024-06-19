import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() newTODO!: any;

  @Output() onCurrentTODOToUpdate = new EventEmitter<any>();

  records: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newTODO'] && changes['newTODO'].currentValue) {
      this.records.push(changes['newTODO'].currentValue);
    }
  }

  handleDelete(registro: any) {
    console.error('Not implemented yet, let BIT students to do it!');
  }
  handleEdit(registro: any) {
    this.onCurrentTODOToUpdate.emit(registro);
  }
}
