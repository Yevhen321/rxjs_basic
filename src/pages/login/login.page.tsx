import { Flex } from '@radix-ui/themes';

import { LoginForm } from '~/forms/login/login-form';
import styles from './login.page.styles.module.css';

export default function LoginPage() {
   return (
      <Flex className={styles.box}>
         <LoginForm />
      </Flex>
   );
}
