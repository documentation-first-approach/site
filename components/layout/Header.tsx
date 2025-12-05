'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('nav');

  return (
    <header className="fixed top-0 z-50 w-full border-b border-neutral-800/50 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4 md:px-6">
        {/* Logo - DFA initials */}
        <Link href="/" className="flex items-center group">
          <div className="font-mono text-base font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            DFA
          </div>
        </Link>

        {/* Navigation - Minimal */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-mono">
          <Link
            href="/foundations"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
          >
            {t('foundations')}
          </Link>
          <Link
            href="/why"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
          >
            {t('why')}
          </Link>
          <Link
            href="/method"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
          >
            {t('method')}
          </Link>
          <Link
            href="/tooling"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
          >
            {t('tooling')}
          </Link>
          <Link
            href="/getting-started"
            className="text-neutral-500 transition-colors hover:text-neutral-200"
          >
            {t('gettingStarted')}
          </Link>
        </nav>

        {/* Actions - Minimal */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/download"
            className="text-xs font-mono text-neutral-500 transition-colors hover:text-neutral-200 hover:underline underline-offset-4"
          >
            {t('download')}
          </Link>
        </div>
      </div>
    </header>
  );
}
