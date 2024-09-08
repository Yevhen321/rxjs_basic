import { useNavigate } from '@tanstack/react-router';

import { signOut } from '~/helpers';

export const useAppbar = () => {
   const navigate = useNavigate();

   const handleLogout = () => {
      signOut();
      navigate({ to: '/' });
   };

   return {
      handlers: {
         handleLogout,
      },
   };
};
