import { CurrencyRates } from './types/types';

export const URL = {
  first: 'http://localhost:3000/api/v1/first/poll',
  second: 'http://localhost:3000/api/v1/second/poll',
  third: 'http://localhost:3000/api/v1/third/poll',
};

export const currencyRates = [
  CurrencyRates['RUB/CUPCAKE'],
  CurrencyRates['USD/CUPCAKE'],
  CurrencyRates['EUR/CUPCAKE'],
  CurrencyRates['RUB/USD'],
  CurrencyRates['RUB/EUR'],
  CurrencyRates['EUR/USD'],
];
