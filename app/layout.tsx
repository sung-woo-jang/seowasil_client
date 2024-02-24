import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '@/provider/ReactQueryProvider';
import { ReduxProviders } from '@/provider/ReduxProvider';
import Header from './_components/Header';
import Footer from './_components/Footer';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { AxiosInterceptor } from '@/api/AxiosInterceptor';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-kr">
      <ReduxProviders>
        <body className={inter.className} suppressHydrationWarning={true}>
          <ReactQueryProvider>
            <AppRouterCacheProvider>
              <AxiosInterceptor>
                <Header />
                <Footer>{children}</Footer>
              </AxiosInterceptor>
            </AppRouterCacheProvider>
          </ReactQueryProvider>
        </body>
      </ReduxProviders>
    </html>
  );
}
