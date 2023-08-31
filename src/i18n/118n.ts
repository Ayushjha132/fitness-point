// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/i18n/en.json';
import hiTranslation from '@/i18n/hi.json';

i18n
  .use(initReactI18next) // Bind react-i18next to i18next
  .init({
    // Configuration options here
    lng: 'en', // Default language
    resources: {
      en: {
        translation: enTranslation
      },
      hi: {
        translation: hiTranslation
      },
      // Add other language translations here
    },
    fallbackLng: 'en', // Fallback language if translation not found
    interpolation: {
      escapeValue: false // React already safely escapes output
    }
  });

export default i18n;
