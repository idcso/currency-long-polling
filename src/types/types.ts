export interface Rates {
  RUB: number;
  USD: number;
  EUR: number;
}

export interface MarketData {
  rates: Rates;
  timestamp: number;
  base: string;
  date: string;
}

export const enum CurrencyRates {
  'RUB/CUPCAKE' = 'RUB/CUPCAKE',
  'USD/CUPCAKE' = 'USD/CUPCAKE',
  'EUR/CUPCAKE' = 'EUR/CUPCAKE',
  'RUB/USD' = 'RUB/USD',
  'RUB/EUR' = 'RUB/EUR',
  'EUR/USD' = 'EUR/USD',
}

export type CurrencyRatesData = Record<CurrencyRates, number>;
export type StateSchema = Record<string, CurrencyRatesData>;
