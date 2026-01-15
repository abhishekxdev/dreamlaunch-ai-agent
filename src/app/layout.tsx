import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Basis Theory - Built to keep customers transacting',
  description: 'More than a token vault—Basis Theory routes, tokenizes, and optimizes your payments to drive conversion, resilience, and retention.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
