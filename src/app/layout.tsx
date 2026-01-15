import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DreamLaunch AI - We Build AI Agents That Enterprises Can Actually Deploy
',
  description: 'Launch intelligent co-pilots that streamline operations across manufacturing, finance, and logistics — without compromising compliance or transparency.',
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
