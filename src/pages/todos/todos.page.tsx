import { Box, Flex, TextField, Container, Button } from '@radix-ui/themes';

import { useTodosHook } from '~/pages/todos/todos.hook';
import { TodoItem } from '~/components/todo-item/todo-item';
import styles from './todos.styles.module.css';

export default function TodosPage() {
   const { data, handlers } = useTodosHook();

   return (
      <Box className={styles.mainBox}>
         <Container size='1'>
            <Flex className={styles.actionsBox}>
               <TextField.Root
                  placeholder='Some text...'
                  value={data.value}
                  onChange={handlers.handleChangeValue}
               />
               <Button onClick={handlers.handleCreateTodo}>Add</Button>
            </Flex>
         </Container>
         <Flex className={styles.todosBox}>
            {data.todos &&
               data.todos.length > 0 &&
               data.todos.map((todo) => (
                  <TodoItem
                     key={todo.id}
                     {...todo}
                     onStatusChange={() => handlers.handleStatusChange(todo.id)}
                     onDelete={() => handlers.handleDelete(todo.id)}
                  />
               ))}
         </Flex>
      </Box>
   );
}
