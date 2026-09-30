import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const inter = localFont({ src: [{ path: '../public/fonts/inter-300.ttf', weight: '300' }, { path: '../public/fonts/inter-400.ttf', weight: '400' }], variable: '--font-body', display: 'swap' });
const headingFont = localFont({ src: '../public/fonts/inter-400.ttf', variable: '--font-heading', display: 'swap' });
export const metadata: Metadata = { title: 'We Make Design — Creative & Technology Studio', description: 'Website design and development, web security and vulnerability assessments, digital invitations, and poster design.', openGraph: { title: 'We Make Design', description: 'Thoughtful websites, security reviews, invitations, and visual design.', type: 'website' } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${headingFont.variable} ${inter.variable}`}>{children}</body></html>; }
