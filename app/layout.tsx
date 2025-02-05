import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { CommandMenuProvider } from '../components/command-menu';
import { Toaster } from '../components/ui/sonner';
import { TooltipProvider } from '../components/ui/tooltip';
import { ThemeProvider } from '../provider/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Common Project',
  description: 'Featuring 500+ 2D Dimensions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <CommandMenuProvider>
            <TooltipProvider>{children}</TooltipProvider>
            <Toaster />
          </CommandMenuProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
