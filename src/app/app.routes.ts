import { Routes } from '@angular/router';
import { TodoAppComponent } from './todo-app/todo-app.component';

export const routes: Routes = [
  { path: 'todos', component: TodoAppComponent },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: '**', redirectTo: 'todos', pathMatch: 'full' },
];
