import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importar archivos de traducción
import esTranslation from '../locales/es/translation.json';
import enTranslation from '../locales/en/translation.json';
import ptTranslation from '../locales/pt/translation.json';

const resources = {
  es: {
    translation: esTranslation,
  },
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'es', // idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },
    react: {
      useSuspense: false, // desactivar suspense para Next.js
    },
  });

export default i18n;