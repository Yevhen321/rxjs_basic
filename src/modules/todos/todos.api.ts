import { AxiosResponse } from 'axios';
import { from, Observable } from 'rxjs';

import { axiosClassic } from '~/api';
import { todosEndpoint } from '~/modules/todos/todos.endpoint';
import type { TodoItem } from '~/modules/todos/todos.interface';

export const todosApi = {
   getTodos: (): Observable<AxiosResponse<TodoItem[]>> => {
      const promise = axiosClassic.get<TodoItem[]>(todosEndpoint.getTodos);
      return from(promise);
   },
};
