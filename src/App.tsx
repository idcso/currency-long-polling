import { useCallback, useEffect, useRef, useState } from 'react';
import Table from './components/CurrencyTable/Table/Table';
import { URL } from './constants';
import { getMarketRates } from './services/getMarketRates';
import { CurrencyRatesData, StateSchema } from './types/types';

const App = () => {
  const [data, setData] = useState<StateSchema | null>(null);
  const timer = useRef<number>();

  const getInitialData = useCallback(async () => {
    const [firstMarket, secondMarket, thirdMarket] =
      await Promise.all<CurrencyRatesData>([
        getMarketRates(`${URL}/first`),
        getMarketRates(`${URL}/second`),
        getMarketRates(`${URL}/third`),
      ]);

    setData({
      firstMarket,
      secondMarket,
      thirdMarket,
    });
  }, []);

  const subscribe = useCallback(async () => {
    try {
      const [firstMarket, secondMarket, thirdMarket] =
        await Promise.all<CurrencyRatesData>([
          getMarketRates(`${URL}/first/poll`),
          getMarketRates(`${URL}/second/poll`),
          getMarketRates(`${URL}/third/poll`),
        ]);

      setData({
        firstMarket,
        secondMarket,
        thirdMarket,
      });

      await subscribe();
    } catch (error) {
      timer.current = setTimeout(subscribe, 0);
    }
  }, []);

  useEffect(() => {
    getInitialData();
    subscribe();

    return () => {
      clearTimeout(timer.current);
    };
  }, [getInitialData, subscribe]);

  return (
    <div className="app">
      {data ? <Table data={data} /> : <div>loading...</div>}
    </div>
  );
};

export default App;
