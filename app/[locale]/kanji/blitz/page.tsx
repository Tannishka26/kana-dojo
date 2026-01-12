import BlitzKanji from '@/features/Kanji/components/Blitz';
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/core/i18n/metadata-helpers';
import { routing } from '@/core/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

export const revalidate = 3600;

export async function generateMetadata(): Promise<Metadata> {
  return await generatePageMetadata('kanjiBlitz');
}

export default function BlitzPage() {
  return <BlitzKanji />;
}
