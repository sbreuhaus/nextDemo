import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    subsets: ['latin'], // Specify the subset here
    weight: ['400', '700'], // (optional) Specify weights if needed
  });