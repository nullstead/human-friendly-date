// Helper function to handle pluralization
const pluralize = (unit, count, singular, plural) => {
    return `${count} ${count === 1 ? singular : plural}`;
  };
  
  const locales = {
    en: {
      timeAgo: (str) => {
        const count = parseInt(str);
        if (str.includes('second')) {
          return `${pluralize('second', count, 'second', 'seconds')} ago`;
        } else if (str.includes('minute')) {
          return `${pluralize('minute', count, 'minute', 'minutes')} ago`;
        } else if (str.includes('hour')) {
          return `${pluralize('hour', count, 'hour', 'hours')} ago`;
        } else if (str.includes('day')) {
          return `${pluralize('day', count, 'day', 'days')} ago`;
        } else if (str.includes('month')) {
          return `${pluralize('month', count, 'month', 'months')} ago`;
        } else if (str.includes('year')) {
          return `${pluralize('year', count, 'year', 'years')} ago`;
        }
        return str + ' ago';
      },
      timeFromNow: (str) => {
        const count = parseInt(str);
        if (str.includes('second')) {
          return `in ${pluralize('second', count, 'second', 'seconds')}`;
        } else if (str.includes('minute')) {
          return `in ${pluralize('minute', count, 'minute', 'minutes')}`;
        } else if (str.includes('hour')) {
          return `in ${pluralize('hour', count, 'hour', 'hours')}`;
        } else if (str.includes('day')) {
          return `in ${pluralize('day', count, 'day', 'days')}`;
        } else if (str.includes('month')) {
          return `in ${pluralize('month', count, 'month', 'months')}`;
        } else if (str.includes('year')) {
          return `in ${pluralize('year', count, 'year', 'years')}`;
        }
        return 'in ' + str;
      },
    },
    es: {
      timeAgo: (str) => {
        const count = parseInt(str);
        if (str.includes('second')) {
          return `${pluralize('segundo', count, 'segundo', 'segundos')} atrás`;
        } else if (str.includes('minute')) {
          return `${pluralize('minuto', count, 'minuto', 'minutos')} atrás`;
        } else if (str.includes('hour')) {
          return `${pluralize('hora', count, 'hora', 'horas')} atrás`;
        } else if (str.includes('day')) {
          return `${pluralize('día', count, 'día', 'días')} atrás`;
        } else if (str.includes('month')) {
          return `${pluralize('mes', count, 'mes', 'meses')} atrás`;
        } else if (str.includes('year')) {
          return `${pluralize('año', count, 'año', 'años')} atrás`;
        }
        return str + ' atrás';
      },
      timeFromNow: (str) => {
        const count = parseInt(str);
        if (str.includes('second')) {
          return `en ${pluralize('segundo', count, 'segundo', 'segundos')}`;
        } else if (str.includes('minute')) {
          return `en ${pluralize('minuto', count, 'minuto', 'minutos')}`;
        } else if (str.includes('hour')) {
          return `en ${pluralize('hora', count, 'hora', 'horas')}`;
        } else if (str.includes('day')) {
          return `en ${pluralize('día', count, 'día', 'días')}`;
        } else if (str.includes('month')) {
          return `en ${pluralize('mes', count, 'mes', 'meses')}`;
        } else if (str.includes('year')) {
          return `en ${pluralize('año', count, 'año', 'años')}`;
        }
        return 'en ' + str;
      },
    },
  };
  
  module.exports = locales;
  