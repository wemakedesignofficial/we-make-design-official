import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { DEFAULT_OG_IMAGE, EMAIL_ADDRESS, INSTAGRAM_URL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';
const inter = localFont({ src: [{ path: '../public/fonts/inter-300.ttf', weight: '300' }, { path: '../public/fonts/inter-400.ttf', weight: '400' }], variable: '--font-body', display: 'swap', preload: true });
const headingFont = localFont({ src: '../public/fonts/inter-400.ttf', variable: '--font-heading', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${SITE_NAME} | Websites, E-commerce & Digital Design`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Websites, E-commerce & Digital Design`,
    description: SITE_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} studio` }],
  },
  twitter: { card: 'summary_large_image', title: `${SITE_NAME} | Websites, E-commerce & Digital Design`, description: SITE_DESCRIPTION, images: [DEFAULT_OG_IMAGE] },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: EMAIL_ADDRESS,
  sameAs: [INSTAGRAM_URL],
  serviceType: ['Website UI/UX and development', 'E-commerce websites', 'Website security checks', 'Digital wedding and event invitations', 'Poster and graphic design'],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><head><link rel="icon" href="/wm-logo.png" type="image/png" /></head><body className={`${headingFont.variable} ${inter.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />{children}</body></html>; }
