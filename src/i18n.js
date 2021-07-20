import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enUsTrans from "./en-us.json";
import zhCnTrans from "./zh-cn.json";

// import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide 
// for passing in lng and translations on init

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enUsTrans,
            }
        },
        resources: {
            zh: {
                translation: zhCnTrans,
            }
        },
        fallbackLng: 'en',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;
