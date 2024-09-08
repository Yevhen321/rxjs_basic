import { BehaviorSubject, map, take } from 'rxjs';

import type { TodoItem } from '~/modules/todos/todos.interface';
import { todosApi } from '~/modules/todos/todos.api';

export class TodosService {
   public todos$ = new BehaviorSubject<TodoItem[]>([]);

   fetchTodos() {
      todosApi
         .getTodos()
         .pipe(
            take(1),
            map((response) => response.data),
            map((todos: TodoItem[]) => todos.filter((todo) => !todo.completed)),
         )
         .subscribe({
            next: (filteredTodos) => {
               this.todos$.next(filteredTodos);
            },
            error: (error) => {
               console.error('Error fetching todos', error);
            },
         });
   }

   addTodo(title: string) {
      const data: TodoItem = {
         completed: false,
         id: Math.random(),
         title,
         userId: 1,
      };
      const currentTodos = this.todos$.getValue();
      this.todos$.next([data, ...currentTodos]);
      return data;
   }

   toggleTodoStatus(id: number) {
      const currentTodos = this.todos$.getValue();
      const updatedTodos = currentTodos.map((todo) =>
         todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      );
      this.todos$.next(updatedTodos);
   }

   deleteTodo(id: number) {
      const currentTodos = this.todos$.getValue();
      const newTodos = currentTodos.filter((todo) => todo.id !== id);
      this.todos$.next(newTodos);
   }
}

export const todosService = new TodosService();
