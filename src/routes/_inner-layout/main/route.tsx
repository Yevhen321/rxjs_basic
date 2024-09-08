import { createFileRoute } from '@tanstack/react-router';
import MainPage from '~/pages/main/main.page';

export const Route = createFileRoute('/_inner-layout/main')({
   component: () => <MainPage />,
});
