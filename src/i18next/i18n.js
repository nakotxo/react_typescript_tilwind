import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEU from './locales/eu/translation.json';
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';
import { idiomas } from "../componentes/idioma/idiomas";

// the translations
const resources = {
  eu: {
    translation: translationEU
  },
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

/**
 * @name getUserBrowserLanguage
 * Función que obtiene el idioma del navegador del usuario y devuelve el objeto idioma correspondiente
 * @returns objectFit: {id: number, lang: string, code: string, img: string}
 * 
 */
export function getUserBrowserLanguage() {
    try {
      const idiomaNav = window.navigator.language;
      let objIdioma = idiomas.find((element) => idiomaNav.includes(element.code));
      if (objIdioma !== undefined) {
        console.log("[i18n.js] --> Idioma del navegador: ", objIdioma);
        
          return objIdioma;
      }
    } catch (error) {
      console.log("[i18n.js] --> Error obtenerIdiomaNavegador ", error);
      return idiomas[0];
    }
  }
  let preIdioma = getUserBrowserLanguage();



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: resources,
    lng: preIdioma.code,

    // keySeparator: false, 
    // nsSeparator:false,

    fallbackLng: preIdioma.code,
    // debug: true,   //It logs to console all the states of i18nxt. Comment it in Production
    
    // have a common namespace used around the full app
    ns: ["translation"],
    defaultNS: "translation",

    interpolation: {
      escapeValue: false, // react already does escaping
      formatSeparator: ",",
    },
  })
  .then(function(t) {
    if (typeof window!== 'undefined') {
      i18n.changeLanguage(window.location.href.split('/')[3]);
    }
  });

export default i18n;