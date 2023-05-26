import './globals.css';
import {Inter} from 'next/font/google';
import {NavigationPane} from '@/src/navigation/components/navigationPane';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Instagram Clone',
  description: 'Project to practice using nextjs',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-row p-4`}>
        <NavigationPane />
        {children}
      </body>
    </html>
  );
}
