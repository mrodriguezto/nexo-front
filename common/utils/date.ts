import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const fromNow = (date: string | Date) => {
  return dayjs(date).locale('es').fromNow(true);
};

export const format = (date: string | Date, template: string = 'DD/MM/YYYY') => {
  return dayjs(date).format('DD/MM/YYYY');
};
