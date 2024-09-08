import { createFileRoute, redirect } from '@tanstack/react-router';

import { isAuthenticated } from '~/helpers';

export const Route = createFileRoute('/')({
   component: () => <div />,
   beforeLoad: () => {
      if (!isAuthenticated()) {
         throw redirect({ to: '/login' });
      } else {
         throw redirect({ to: '/main' });
      }
   },
});
