'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { locales, type Locale } from '@/i18n';

const languageNames: Record<Locale, string> = {
  'en': 'EN',
  'pt-BR': 'PT',
  'es': 'ES',
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (newLocale: Locale) => {
    // Get the current path without the locale prefix
    const segments = pathname.split('/').filter(Boolean);
    const currentPath = segments.slice(1).join('/');

    // Build the new path with the new locale (always include locale prefix)
    const newPath = currentPath
      ? `/${newLocale}/${currentPath}`
      : `/${newLocale}`;

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 border border-neutral-800">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => handleLocaleChange(locale)}
          className={`px-3 py-1 text-xs font-mono transition-colors cursor-pointer ${
            currentLocale === locale
              ? 'bg-white text-black'
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
          aria-label={`Switch to ${languageNames[locale]}`}
        >
          {languageNames[locale]}
        </button>
      ))}
    </div>
  );
}
