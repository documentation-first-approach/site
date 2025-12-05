'use client';

import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('footer');
  return (
    <footer className="border-t border-neutral-900 bg-black">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="font-mono text-base font-bold tracking-tight mb-3 text-white">
              {t('brand.name')}
            </div>
            <p className="text-xs font-mono text-neutral-600 leading-relaxed">
              {t('brand.tagline')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-neutral-500 mb-3">
              {t('navigate.title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/getting-started"
                  className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors"
                >
                  {t('navigate.docs')}
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors"
                >
                  {t('navigate.download')}
                </Link>
              </li>
              <li>
                <Link
                  href="/method"
                  className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors"
                >
                  {t('navigate.method')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono font-semibold text-neutral-500 mb-3">
              {t('resources.title')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/deMGoncalves/documentation-first-approach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors"
                >
                  {t('resources.github')}
                </a>
              </li>
              <li>
                <Link
                  href="/foundations"
                  className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors"
                >
                  {t('resources.foundations')}
                </Link>
              </li>
              <li>
                <Link
                  href="/tooling"
                  className="text-xs font-mono text-neutral-600 hover:text-neutral-400 transition-colors"
                >
                  {t('resources.tooling')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-neutral-900 pt-8">
          <div className="text-xs font-mono text-neutral-700">
            <p>
              {t('copyright')} • <span className="text-neutral-600">{t('license')}</span>
            </p>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              <span>{t('createdBy')}</span>
              <span className="text-neutral-500">{t('author')}</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/deMGoncalves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
                <a
                  href="https://linkedin.com/in/deMGoncalves"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-neutral-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
