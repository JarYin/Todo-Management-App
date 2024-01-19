import { Component } from '@angular/core';
import { TodoCardComponent } from '../../shared/components/todo-card/todo-card.component';
import { TodoService } from '../../core/services/todo.service';
import { ITodo } from '../../core/models/todo.model';
import { NgFor } from '@angular/common';
import { SlidePanelComponent } from '../../shared/ui/slide-panel/slide-panel.component';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent, NgFor, SlidePanelComponent],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoForm!: FormGroup
  todos: ITodo[] = [];
  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      status: new FormControl('OPEN',[Validators.required])
    })
  }

  ngOnInit(): void {
    this.getAllTodos();
  }

  getAllTodos() {
    this.todos = this.todoService.getAllTodo();
  }
}
