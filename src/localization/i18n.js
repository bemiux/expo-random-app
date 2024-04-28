import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en'
import it from './it'

export const languages = [
  { label: 'English', value: 'en' },
  { label: 'Italiano', value: 'it' },
]

const resources = {
  en,
  it,
}

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3', // Fix Android devices
  resources,
  lng: 'en', // Default Language
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
