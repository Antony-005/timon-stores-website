import './globals.css';
import { Fraunces, IBM_Plex_Mono } from 'next/font/google';
import { InquiryProvider } from '@/context/InquiryContext';
import Script from 'next/script';

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

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Timon Stores Ltd',
  description:
    'Regional FMCG wholesale and retail distributor serving Homa Bay, Kisumu, Migori, Kisii and Nyamira counties in Kenya.',
  url: 'https://timonstores.co.ke',
  telephone: '+254720873696',
  email: 'timonstores@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oyugis',
    addressRegion: 'Homa Bay County',
    addressCountry: 'KE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -0.507896,
    longitude: 34.738167,
  },
  areaServed: [
    'Homa Bay County',
    'Kisumu County',
    'Migori County',
    'Kisii County',
    'Nyamira County',
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ],
    opens: '08:00',
    closes: '18:00',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexMono.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0C3KD9T85F"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0C3KD9T85F');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <InquiryProvider>{children}</InquiryProvider>
      </body>
    </html>
  );
}