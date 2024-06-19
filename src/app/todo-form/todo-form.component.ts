import { NgIf } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  registerForm!: FormGroup;
  @Input() currentTODOToUpdate!: any;
  @Output() onCreatedTODO = new EventEmitter<any>();

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['currentTODOToUpdate'];
    if (change && change.currentValue) {
      this.registerForm.patchValue(change.currentValue);
    }
  }
  onSubmit(): void {
    this.onCreatedTODO.emit(this.registerForm.value);
    this.registerForm.reset();
  }
}
