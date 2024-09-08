import { Link } from '@tanstack/react-router';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Button } from '@radix-ui/themes';

import styles from './appbar.styles.module.css';
import { useAppbar } from '~/components/appbar/appbar.hook';

export function AppBar() {
   const { handlers } = useAppbar();

   return (
      <NavigationMenu.Root className={`${styles.appbar}`}>
         <NavigationMenu.List className={styles.navList}>
            <div className={styles.linksBox}>
               <NavigationMenu.Item>
                  <Link
                     to='/main'
                     className={styles.navLink}
                     activeProps={{ className: styles.activeNavLink }}
                  >
                     Main
                  </Link>
               </NavigationMenu.Item>
               <NavigationMenu.Item>
                  <Link
                     to='/todos'
                     className={styles.navLink}
                     activeProps={{ className: styles.activeNavLink }}
                  >
                     Todos
                  </Link>
               </NavigationMenu.Item>
            </div>
            <NavigationMenu.Item>
               <Button onClick={handlers.handleLogout} className={styles.navLink}>
                  Logout
               </Button>
            </NavigationMenu.Item>
         </NavigationMenu.List>
      </NavigationMenu.Root>
   );
}
