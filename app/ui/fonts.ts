import { Inter, Lusitana } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({
    subsets: ['latin'], // Specify the subset here
    weight: ['400', '700'], // (optional) Specify weights if needed
  });

export const fonts = { inter, lusitana };
