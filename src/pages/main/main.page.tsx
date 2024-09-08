import { Box, Heading } from '@radix-ui/themes';

import styles from './main.page.styles.module.css';

export default function MainPage() {
   return (
      <Box className={styles.mainBox}>
         <Heading as='h4'>Hello World</Heading>
      </Box>
   );
}
