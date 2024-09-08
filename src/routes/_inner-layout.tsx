import { createFileRoute, redirect } from '@tanstack/react-router';

import { isAuthenticated } from '~/helpers';
import PageContainer from '~/components/page-container/page-container';

export const Route = createFileRoute('/_inner-layout')({
   component: () => <PageContainer />,
   beforeLoad: () => {
      if (!isAuthenticated()) {
         throw redirect({ to: '/login' });
      }
   },
});
