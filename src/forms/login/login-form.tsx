import * as Form from '@radix-ui/react-form';
import { TextField, Box, Button } from '@radix-ui/themes';

import styles from './login-form.styles.module.css';
import { useLoginForm } from '~/forms/login/login-form.hook';

export function LoginForm() {
   const { handlers, data } = useLoginForm();

   return (
      <Form.Root className={styles.form} onSubmit={handlers.handleSubmit} data-testid='login-form'>
         <Form.Field name='email' className={styles.formField}>
            <Box className={styles.box}>
               <Form.Label className={styles.formLabel}>Email</Form.Label>
               {data.errors.email && (
                  <Form.Message className={styles.formMessage}>{data.errors.email}</Form.Message>
               )}
            </Box>
            <Form.Control asChild>
               <TextField.Root
                  value={data.state.email}
                  name='email'
                  onChange={handlers.handleChange}
                  placeholder='Enter email'
               />
            </Form.Control>
         </Form.Field>

         <Form.Field name='password' className={styles.formField}>
            <Box className={styles.box}>
               <Form.Label className={styles.formLabel}>Password</Form.Label>
               {data.errors.password && (
                  <Form.Message className={styles.formMessage}>{data.errors.password}</Form.Message>
               )}
            </Box>
            <Form.Control asChild>
               <TextField.Root
                  value={data.state.password}
                  name='password'
                  onChange={handlers.handleChange}
                  placeholder='Enter password'
                  type='password'
                  autoComplete='off'
               />
            </Form.Control>
         </Form.Field>

         <Form.Submit asChild>
            <Button type='submit'>Login</Button>
         </Form.Submit>
      </Form.Root>
   );
}
