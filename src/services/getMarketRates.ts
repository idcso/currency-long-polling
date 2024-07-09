import axios from 'axios';
import { CurrencyRatesData, MarketData } from '../types/types';

export const getMarketRates = async (
  url: string
): Promise<CurrencyRatesData> => {
  const response = await axios.get<MarketData>(url);
  const dataRates = response.data.rates;
  return {
    'RUB/CUPCAKE': dataRates.RUB,
    'USD/CUPCAKE': dataRates.USD,
    'EUR/CUPCAKE': dataRates.EUR,
    'RUB/USD': dataRates.RUB / dataRates.USD,
    'RUB/EUR': dataRates.RUB / dataRates.EUR,
    'EUR/USD': dataRates.EUR / dataRates.USD,
  };
};
