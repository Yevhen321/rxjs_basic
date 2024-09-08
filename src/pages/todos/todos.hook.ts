import { ChangeEvent, useEffect, useState } from 'react';

import { useSubscription } from '~/hooks/useSubscription';
import { todosService } from '@todos/todos.service';
import type { TodoItem } from '@todos/todos.interface';

export const useTodosHook = () => {
   const [value, setValue] = useState('');

   const todos = useSubscription<TodoItem[]>(todosService.todos$);

   useEffect(() => {
      todosService.fetchTodos();
   }, []);

   const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
   };

   const handleCreateTodo = () => {
      if (!value.trim()) return;
      todosService.addTodo(value);
      setValue('');
   };

   const handleStatusChange = (id: number) => {
      todosService.toggleTodoStatus(id);
   };

   const handleDelete = (id: number) => {
      todosService.deleteTodo(id);
   };

   return {
      handlers: {
         handleChangeValue,
         handleCreateTodo,
         handleStatusChange,
         handleDelete,
      },
      data: {
         todos,
         value,
      },
   };
};
