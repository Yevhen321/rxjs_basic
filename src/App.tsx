import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Theme } from '@radix-ui/themes';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
   interface Register {
      router: typeof router;
   }
}

function App() {
   return (
      <Theme>
         <RouterProvider router={router} />
      </Theme>
   );
}

export default App;
