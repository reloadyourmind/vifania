import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

export const FALLBACK_LOCALE = 'ru';

export type WeblateOptions = {
    addPath?: string;
};

export type InitInternationalizationOptions = {
    webplate?: WeblateOptions;
};

const appNamespace = 'translation';

export const initInternationalization = async ({
    webplate,
}: InitInternationalizationOptions) => {
    await i18next
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            fallbackLng: FALLBACK_LOCALE, // if you're using a language detector, do not define the lng option
            debug: false, // Env.isDev,
            interpolation: {
                escapeValue: false,
            },
            returnEmptyString: false,
            ns: [appNamespace],
            defaultNS: appNamespace,
            fallbackNS: appNamespace,
            backend: {
                loadPath: ([lng]: string[], [ns]: string[]) => {
                    return `dist/l10n/${ns}/${lng}.json`;
                },
                addPath: webplate?.addPath,
            },
            saveMissing: Boolean(webplate?.addPath),
            detection: {
                order: [
                    'querystring',
                    'cookie',
                    'localStorage',
                    'sessionStorage',
                    'htmlTag',
                    'path',
                    'subdomain',
                ],
            },
        });
};

export default i18next;
