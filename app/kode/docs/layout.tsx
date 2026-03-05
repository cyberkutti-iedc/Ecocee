import { Metadata } from 'next';
import { DocsLayout } from '@/components/docs/layout';

export const metadata: Metadata = {
  title: 'Kode Documentation',
  description: 'Official documentation for the Kode programming language',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsLayout>{children}</DocsLayout>;
}