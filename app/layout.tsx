import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const cormorant = localFont({ src: '../public/fonts/cormorant-garamond-400.ttf', weight: '400', variable: '--font-display', display: 'swap' });
const inter = localFont({ src: [{ path: '../public/fonts/inter-300.ttf', weight: '300' }, { path: '../public/fonts/inter-400.ttf', weight: '400' }], variable: '--font-body', display: 'swap' });
export const metadata: Metadata = { title: 'We Make Design — Creative & Technology Studio', description: 'Website design and development, web security and vulnerability assessments, digital invitations, and poster design.', openGraph: { title: 'We Make Design', description: 'Thoughtful websites, security reviews, invitations, and visual design.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${cormorant.variable} ${inter.variable}`}>{children}</body></html>; }
