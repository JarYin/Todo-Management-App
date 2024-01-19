import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: ITodo[] = [
    {
      id: 1,
      title: 'Todo 1',
      description: 'Description 1',
      status: 'OPEN',
    },
  ];

  constructor() {}

  getAllTodo() {
    return this.todos;
  }
}
