import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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

  @Output() onCreatedTODO = new EventEmitter<any>();

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
    });
  }
  onSubmit(): void {
    console.log('Form going to create', this.registerForm.value);
    this.onCreatedTODO.emit(this.registerForm.value);
    this.registerForm.reset();
  }
}
