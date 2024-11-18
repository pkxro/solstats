import { RootProvider } from 'fumadocs-ui/provider';
import 'fumadocs-ui/style.css';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';


const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <RootProvider>
        <Banner variant="rainbow">All data is provided as is. Resources are not formally approved or pushed by the Solana Foundation. NFA / DYOR</Banner>
          {children}
          </RootProvider>
      </body>
    </html>
  );
}
