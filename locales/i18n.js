import I18n from 'react-native-i18n';

// Import all locales
import en from './en.json';
import hi from './hi.json';

export const LanguageEnglish = 'en';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;
I18n.defaultLocale = LanguageEnglish;
// Define the supported translations
I18n.translations = {
  en,
  hi,
};
// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params);
}
export function getLocale() {
  return I18n.locale;
}
export function getLocaleInitials() {
  return I18n.locale.slice(0, 2);
}

export default I18n;
