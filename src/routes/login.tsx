import { createFileRoute, redirect } from '@tanstack/react-router';

import { isAuthenticated } from '~/helpers';
import LoginPage from '~/pages/login/login.page';

export const Route = createFileRoute('/login')({
   component: () => <LoginPage />,
   beforeLoad: () => {
      if (isAuthenticated()) {
         throw redirect({ to: '/main' });
      }
   },
});
