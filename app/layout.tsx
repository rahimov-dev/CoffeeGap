import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeRegistry from './components/ThemeRegistry';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import StoreProvider from '@/lib/redux/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'KofeGap',
  description: 'Kofegap ...',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StoreProvider>
          <AppRouterCacheProvider>
            <ThemeRegistry>
              <div className='dark:bg-gray-900 bg-slate-200 dark:text-white'>
                {children}
              </div>
            </ThemeRegistry>
          </AppRouterCacheProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
