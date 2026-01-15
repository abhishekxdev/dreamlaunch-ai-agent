import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DreamLaunch AI',
  description: 'We Build AI Agents That Enterprises Can Actually Deploy',
  openGraph: {
    title: 'dreamlaunch AI',
  },
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
