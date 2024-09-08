import { from, take } from 'rxjs';
import { AxiosHeaders, AxiosResponse } from 'axios';

import { todosApi } from '~/modules/todos/todos.api';
import type { TodoItem } from './todos.interface';
import { TodosService } from './todos.service';

vi.mock('./todos.api', () => ({
   todosApi: {
      getTodos: vi.fn(),
   },
}));

const mockTodos: TodoItem[] = [
   { id: 1, title: 'Test Todo 1', completed: false, userId: 1 },
   { id: 2, title: 'Test Todo 2', completed: true, userId: 2 },
   { id: 3, title: 'Test Todo 3', completed: false, userId: 3 },
];

describe('TodosService', () => {
   let todosService: TodosService;

   beforeEach(() => {
      todosService = new TodosService();
   });

   it('should add a todo', () => {
      const todoTitle = 'NewTodo';
      todosService.addTodo(todoTitle);

      todosService.todos$.subscribe((todos) => {
         expect(todos.length).toBe(1);
         expect(todos[0]).toMatchObject({
            title: todoTitle,
            userId: 1,
            completed: false,
         });
      });
   });

   it('should delete a todo', () => {
      const todoTitle = 'NewTodo';
      const newTodo = todosService.addTodo(todoTitle);

      todosService.deleteTodo(newTodo.id);

      todosService.todos$.subscribe((todos) => {
         expect(todos.length).toBe(0);
      });
   });

   it('initial todo completed status', () => {
      const todoTitle = 'NewTodo';
      const newTodo = todosService.addTodo(todoTitle);

      todosService.todos$.subscribe((todos) => {
         const todo = todos.find((todo) => todo.id === newTodo.id);
         expect(todo).toBeDefined();
         expect(todo?.completed).toBe(false);
      });
   });

   it('todo completed status changed to true', () => {
      const todoTitle = 'NewTodo';
      const newTodo = todosService.addTodo(todoTitle);

      todosService.toggleTodoStatus(newTodo.id);

      todosService.todos$.subscribe((todos) => {
         const todo = todos.find((todo) => todo.id === newTodo.id);
         expect(todo).toBeDefined();
         expect(todo?.completed).toBe(true);
      });
   });

   it('should filter todos correctly when fetchTodos is called', async () => {
      const mockResponse: AxiosResponse<TodoItem[]> = {
         data: mockTodos,
         status: 200,
         statusText: 'OK',
         headers: {},
         config: {
            headers: new AxiosHeaders({
               'Content-Type': 'application/json',
            }),
         },
      };

      vi.mocked(todosApi.getTodos).mockReturnValue(from([mockResponse]));

      todosService.fetchTodos();

      const resultPromise = new Promise<TodoItem[]>((resolve) => {
         todosService.todos$.pipe(take(1)).subscribe(resolve);
      });

      const result = await resultPromise;
      const expectedTodos = mockTodos.filter((todo) => !todo.completed);
      expect(result).toEqual(expectedTodos);
   });
});
