import format from 'date-fns/format';

export function formatDate(date: Date, form: string): string {
    return format(date, form);
};

export const locales = {
    en: require('date-fns/locale/en'),
    eo: require('date-fns/locale/eo'),
    ru: require('date-fns/locale/ru')
};
