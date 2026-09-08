import './globals.css';
import { Fraunces, IBM_Plex_Mono } from 'next/font/google';
import { InquiryProvider } from '@/context/InquiryContext';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces' });
const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
});

export const metadata = {
  title: 'Timon Stores Ltd | Regional FMCG Distribution',
  description:
    'Timon Stores Ltd is a trusted regional distributor serving Homa Bay, Kisumu, Migori, Kisii and Nyamira counties.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexMono.variable}`}>
      <body>
        <InquiryProvider>{children}</InquiryProvider>
      </body>
    </html>
  );
}