import { useEffect, useState } from 'react';
import { BehaviorSubject, Subject } from 'rxjs';

export const useSubscription = <T>(localStream?: BehaviorSubject<T> | Subject<T>) => {
   if (!localStream) {
      return;
   }
   const [subscriptionValue, setSubscriptionValue] = useState<T | undefined>(undefined);

   useEffect(() => {
      const subscription = localStream.subscribe((data: T) => setSubscriptionValue(data));
      return () => subscription.unsubscribe();
   }, [localStream]);

   return subscriptionValue;
};
