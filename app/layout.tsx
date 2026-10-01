import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chillbro',
  description: 'A privacy-first ad-free music streaming starter app.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
