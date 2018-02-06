import format from 'date-fns/format';

// const locales = {
//     en: require('date-fns/locale/en'),
//     eo: require('date-fns/locale/eo'),
//     ru: require('date-fns/locale/ru')
// };

export function formatDate(date: Date, form: string): string {
    return format(date, form);
}