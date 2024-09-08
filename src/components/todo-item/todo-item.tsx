import { Heading, Text, Flex, Button } from '@radix-ui/themes';

import type { TodoItem } from '@todos/todos.interface';
import styles from './todo-item.styles.module.css';

type TodoItemProps = TodoItem & {
   onStatusChange: () => void;
   onDelete: () => void;
};

export function TodoItem(props: TodoItemProps) {
   const { completed, title, onStatusChange, onDelete } = props;

   return (
      <Flex className={styles.card}>
         <Heading as='h3' className={styles.title}>
            {title}
         </Heading>
         <Flex className={styles.status}>
            {completed ? (
               <Text as='span' className={styles.completed}>
                  Completed
               </Text>
            ) : (
               <Text as='span' className={styles.incomplete}>
                  Incomplete
               </Text>
            )}
            <input type='checkbox' checked={completed} onChange={onStatusChange} />
         </Flex>

         <Button className={styles.deleteIcon} onClick={onDelete} disabled={!completed}>
            X
         </Button>
      </Flex>
   );
}
