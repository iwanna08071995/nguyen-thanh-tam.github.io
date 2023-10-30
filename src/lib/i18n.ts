import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { getDataFromLocalStorage } from "../utils/helpers";

import English from "../../public/locales/en.json";
import Vietnamese from "../..//public/locales/vi.json";

const langFromLocalStorage = getDataFromLocalStorage("lang");

let langDefault = "en";

if (langFromLocalStorage) {
  langDefault = langFromLocalStorage;
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: English,
    },
    vi: {
      translation: Vietnamese,
    },
  },
  lng: langDefault,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
