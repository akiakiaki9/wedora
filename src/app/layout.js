import './globals.css';

const SITE_URL = 'https://wedora.uz';
const SITE_NAME = 'Wedora';

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: 'Заказать современное онлайн пригласительное на свадьбу | Wedora',
  description:
    'Создаём современные онлайн-пригласительные на свадьбу. Ссылка + QR-код, красивый дизайн на выбор, на любых языках. Быстро.',

  // Расширенные ключевые слова (RU + UZ + EN)
  keywords: [
    // RU
    'пригласительное на свадьбу',
    'свадебное приглашение онлайн',
    'приглашение на свадьбу по ссылке',
    'приглашение с QR-кодом',
    'заказать приглашение на свадьбу',
    'свадебный сайт-приглашение',
    'онлайн приглашение той',
    'электронное приглашение свадьба',
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
    // Гео
    'свадебное приглашение Ташкент',
    'свадебное приглашение Узбекистан',
    'taklifnoma Toshkent',
    'taklifnoma O‘zbekiston',
  ],

  authors: [{ name: 'Wedora', url: SITE_URL }],
  creator: 'Wedora',
  publisher: 'Wedora',

  // Canonical + alternates
  alternates: {
    canonical: '/',
    languages: {
      'ru': '/ru',
      'uz': '/uz',
      'en': '/en',
      'x-default': '/',
    },
  },

  // Robots
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

  // Open Graph
  openGraph: {
    title: 'Заказать современное онлайн пригласительное на свадьбу | Wedora',
    description:
      'Создаём современные онлайн-пригласительные на свадьбу. Ссылка + QR-код, красивый дизайн на выбор, на любых языках. Быстро.',
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
    alternateLocale: ['uz_UZ', 'en_US'],
    type: 'website',
  },

  // Twitter card
  twitter: {
    card: 'summary_large_image',
    title: 'Заказать современное онлайн пригласительное на свадьбу | Wedora',
    description:
      'Создаём современные онлайн-пригласительные на свадьбу. Ссылка + QR-код, красивый дизайн на выбор, на любых языках.',
    images: ['/images/logo.JPG'],
  },

  // Иконки — как было
  icons: {
    icon: '/images/logo.JPG',
    apple: '/images/logo.JPG',
  },

  // Прочее
  applicationName: SITE_NAME,
  category: 'wedding',
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },

  // Верификация (замени на свои коды когда получишь)
  // verification: {
  //   google: 'твой-google-site-verification',
  //   yandex: 'твой-yandex-verification',
  // },
};

export const viewport = {
  themeColor: '#f7f3ec',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,          // разрешаем зум (a11y + Google любит)
  userScalable: true,
  colorScheme: 'light',
};

export default function RootLayout({ children }) {
  // JSON-LD: Organization + WebSite + Service
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
          areaServed: ['UZ', 'KZ', 'KG', 'TJ', 'RU'],
          availableLanguage: ['ru', 'uz', 'en'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Wedora',
        description:
          'Современные онлайн-пригласительные на свадьбу. Ссылка + QR-код, красивый дизайн на выбор, на любых языках.',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'ru-RU',
      },
      {
        '@type': 'Service',
        name: 'Онлайн-пригласительное на свадьбу',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: 'UZ',
        serviceType: 'Wedding invitation service',
        description:
          'Создаём персональные онлайн-пригласительные на свадьбу с QR-кодом, музыкой, таймером, картой и мультиязычностью.',
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
        {/* Preconnect к Google Fonts (грузим быстрее) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Тема для мобильного Safari / Chrome */}
        <meta name="theme-color" content="#f7f3ec" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wedora" />

        {/* Структурированные данные для Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}