import { Storage } from '~/enums/storage-enum';

export function validateEmail(email: string) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!email) {
      return 'Email is required';
   }
   if (!emailRegex.test(email)) {
      return 'Please enter a valid email address';
   }
   return '';
}

export function validatePassword(password: string) {
   if (!password) {
      return 'Password is required';
   }
   if (password.length < 6) {
      return 'Password must be at least 6 characters long';
   }
   return '';
}

export async function signIn() {
   return localStorage.setItem(Storage.ACCESS_TOKEN, 'true');
}

export async function signOut() {
   return localStorage.removeItem(Storage.ACCESS_TOKEN);
}

export function isAuthenticated() {
   return localStorage.getItem(Storage.ACCESS_TOKEN) === 'true';
}
