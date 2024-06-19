import { NgFor, NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TODOType } from '../../types';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
})
export class TodoListComponent {
  @Input() newTODO!: TODOType;

  @Output() onCurrentTODOToUpdate = new EventEmitter<TODOType>();

  records: TODOType[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['newTODO'] && changes['newTODO'].currentValue) {
      this.records.push(changes['newTODO'].currentValue);
    }
  }

  handleDelete(registro: TODOType) {
    console.error('Not implemented yet, let BIT students to do it!');
  }
  handleEdit(registro: TODOType) {
    this.onCurrentTODOToUpdate.emit(registro);
  }
}
