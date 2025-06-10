import { DEFAULT_LOCALE, DEFAULT_CURRENCY } from '@/constants';

/**
 *
 * @param amount integer or float
 * @param currency Intl code
 * @param locale Intl locale
 * @returns string, ex: '$100.5'
 */
const formatCurrency = (
  amount: number,
  currency: string = DEFAULT_CURRENCY,
  locale: string = DEFAULT_LOCALE
): string => {
  if (!amount || typeof amount !== 'number') {
    return '';
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export default formatCurrency;
