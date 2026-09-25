import './globals.css';
import Script from 'next/script';

const SITE_URL = 'https://wedora.uz';
const SITE_NAME = 'Wedora';

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'Заказать онлайн пригласительные на свадьбу | Wedora',

  description:
    'Создаём современные онлайн-пригласительные на свадьбу в Узбекистане. Персональный дизайн, ссылка, QR-код, музыка, таймер и карта. Закажите свадебное приглашение онлайн.',

  keywords: [
    // RU
    'пригласительное на свадьбу',
    'свадебное приглашение онлайн',
    'онлайн-приглашение на свадьбу',
    'приглашение на свадьбу по ссылке',
    'приглашение с QR-кодом',
    'заказать приглашение на свадьбу',
    'свадебный сайт-приглашение',
    'онлайн приглашение той',
    'электронное приглашение на свадьбу',

    // UZ
    'online taklifnoma',
    'toy taklifnoma',
    'to‘y taklifnomasi',
    'taklifnoma buyurtma',
    'taklifnoma QR kod',
    'onlayn taklifnoma to‘y',

    // EN
    'wedding invitation online',
    'digital wedding invitation',
    'QR code wedding invitation',
    'wedding invitation website',

    // Brand
    'wedora',
    'wedora.uz',
    'ведора',

    // GEO
    'свадебное приглашение Ташкент',
    'свадебное приглашение Узбекистан',
    'taklifnoma Toshkent',
    'taklifnoma O‘zbekiston',
  ],

  authors: [
    {
      name: 'Wedora',
      url: SITE_URL,
    },
  ],

  creator: 'Wedora',
  publisher: 'Wedora',

  // Только главная страница — языковых страниц /ru /uz /en нет
  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'Онлайн-пригласительные на свадьбу | Wedora',

    description:
      'Создаём современные онлайн-пригласительные на свадьбу в Узбекистане. Персональный дизайн, ссылка, QR-код, музыка, таймер и карта.',

    url: SITE_URL,
    siteName: SITE_NAME,

    images: [
      {
        url: '/images/logo.JPG',
        width: 1200,
        height: 630,
        alt: 'Wedora — онлайн-пригласительные на свадьбу',
      },
    ],

    locale: 'ru_RU',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Онлайн-пригласительные на свадьбу | Wedora',

    description:
      'Современные свадебные приглашения онлайн. Персональный дизайн, ссылка, QR-код, музыка, таймер и карта.',

    images: ['/images/logo.JPG'],
  },

  icons: {
    icon: '/images/logo.JPG',
    apple: '/images/logo.JPG',
  },

  applicationName: SITE_NAME,
  category: 'wedding',

  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },

  // Когда получишь коды — раскомментируй
  // verification: {
  //   google: 'твой-google-site-verification',
  //   yandex: 'твой-yandex-verification',
  // },
};

export const viewport = {
  themeColor: '#f7f3ec',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',

    '@graph': [
      {
        '@type': 'Organization',

        '@id': `${SITE_URL}/#organization`,

        name: 'Wedora',

        url: SITE_URL,

        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/images/logo.JPG`,
        },

        sameAs: [
          'https://www.instagram.com/wedora.uz/',
          'https://t.me/wedora_uz',
        ],

        contactPoint: {
          '@type': 'ContactPoint',

          telephone: '+998-50-095-33-31',

          contactType: 'customer service',

          areaServed: [
            'UZ',
            'KZ',
            'KG',
            'TJ',
            'RU',
          ],

          availableLanguage: [
            'ru',
            'uz',
            'en',
          ],
        },
      },

      {
        '@type': 'WebSite',

        '@id': `${SITE_URL}/#website`,

        url: SITE_URL,

        name: 'Wedora',

        description:
          'Современные онлайн-пригласительные на свадьбу. Персональный дизайн, ссылка, QR-код, музыка, таймер и карта.',

        publisher: {
          '@id': `${SITE_URL}/#organization`,
        },

        inLanguage: 'ru-RU',
      },

      {
        '@type': 'Service',

        '@id': `${SITE_URL}/#wedding-invitation-service`,

        name: 'Онлайн-пригласительное на свадьбу',

        provider: {
          '@id': `${SITE_URL}/#organization`,
        },

        areaServed: {
          '@type': 'Country',
          name: 'Uzbekistan',
        },

        serviceType: 'Wedding invitation service',

        description:
          'Создаём персональные онлайн-пригласительные на свадьбу с QR-кодом, музыкой, таймером, картой и поддержкой нескольких языков.',

        offers: {
          '@type': 'AggregateOffer',

          priceCurrency: 'UZS',

          lowPrice: '200000',

          highPrice: '300000',

          offerCount: '2',
        },
      },
    ],
  };

  return (
    <html lang="ru">
      <head>
        {/* Google Fonts */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Theme */}
        <meta
          name="theme-color"
          content="#f7f3ec"
        />

        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />

        <meta
          name="apple-mobile-web-app-title"
          content="Wedora"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HJJTVKQH1Z"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-HJJTVKQH1Z');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}