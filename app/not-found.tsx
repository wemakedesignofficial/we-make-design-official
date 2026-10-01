import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Page not found | ${SITE_NAME}`,
  description: 'The page you requested could not be found.',
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <main className="not-found container"><p className="eyebrow">404 / Page not found</p><h1>This page isn’t here.</h1><Link href="/">Return to We Make Designs ↗</Link></main>;
}
