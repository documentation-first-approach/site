import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Idiomas suportados
export const locales = ['en', 'pt-BR', 'es'] as const;
export type Locale = (typeof locales)[number];

// Idioma padrão
export const defaultLocale: Locale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
  //  This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
