import { DEFAULT_DATE_LOCALE, DEFAULT_DATE_OPTIONS } from '@/constants';

/**
 * Format date by options
 * @param timestamp number to covert
 * @param locale date locale
 * @param options DateTimeFormatOptions
 * @returns default for 'DD Mon YYYY', ex: '05 Dec 2024'
 */
const formateDate = (
  timestamp: number,
  locale: string = DEFAULT_DATE_LOCALE,
  options: Intl.DateTimeFormatOptions = DEFAULT_DATE_OPTIONS
): string => {
  if (typeof timestamp !== 'number' || !Number.isFinite(timestamp)) {
    return 'Error Value';
  }
  const date = new Date(timestamp);
  if (isNaN(date.getTime())) {
    throw 'Invalid Date.';
  }
  return date.toLocaleDateString(locale, options);
};

export default formateDate