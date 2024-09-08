import { Outlet } from '@tanstack/react-router';

import { AppBar } from '~/components/appbar/appbar';
import styles from './page-container.styles.module.css';

export default function PageContainer() {
   return (
      <>
         <AppBar />
         <main className={styles.main}>
            <Outlet />
         </main>
      </>
   );
}
