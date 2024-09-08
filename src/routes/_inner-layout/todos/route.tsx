import { createFileRoute } from '@tanstack/react-router';

import TodosPage from '~/pages/todos/todos.page';

export const Route = createFileRoute('/_inner-layout/todos')({
   component: () => <TodosPage />,
});
